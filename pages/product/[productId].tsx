import Head from 'next/head'
import Link from "next/link";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useEffect } from 'react'
//import { Inter } from '@next/font/google'
//const inter = Inter({ subsets: ['latin'] })

type Product = {
  name: string
  description: string
  img: string
  caption: string
  offer: string
  id: string
}
 
export const getServerSideProps: GetServerSideProps<{product: Product}> = async (context) => {
  const dotenv = require('dotenv')
  dotenv.config()
  const { Client } = require('@notionhq/client')
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const databaseId = process.env.NOTION_DATABASE_ID || ''

  let product: Product = {
    name: 'Something went wrong',
    description: 'Something went wrong',
    img: '',
    caption: '',
    offer: '',
    id: '',
  }

  try {
    const response = await notion.databases.query({
        database_id: databaseId,
        id: context.query.productId
    })
    
    const {properties, id} = response.results.find((product: any) => product.id === context.query.productId)

    const finalProduct: Product = {
      name: properties.Name?.title[0]?.plain_text || '',
      description: properties.Description?.rich_text[0]?.plain_text || '',
      img: properties.Image.files[0]?.file?.url || '',
      caption: properties.Caption?.rich_text[0]?.plain_text,
      offer: properties.Offer?.select?.name,
      id
    }
    product = finalProduct
  } catch (error: any){
      console.log(error)
  }
  
  return { props: { product } }
}

export default function Home({product}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  useEffect(()=>{
    console.log(product)
  }, [])

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.caption} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section className="flex-col px-4 md:px-24 pt-48 md:pt-40 pb-16 md:pb-0">
          <article className='flex flex-col md:flex-row gap-4'>
            <img className='w-full md:w-96 object-cover' src={product.img} alt={product.caption} />
            <div className='w-40%'>
              <h1 className='text-7xl prata'>{product.name}</h1>
              <p className='mt-8 max-w-[40ch] text-justify'>{product.description}</p>
            </div>
            <div>
              <h3 className='w-72 prata text-xl text-end'>{product.caption}</h3>
              <h3 className='w-72 text-xl font-bold text-end mt-4'>$49.99</h3>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
