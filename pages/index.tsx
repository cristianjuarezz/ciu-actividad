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
 
export const getServerSideProps: GetServerSideProps<{products: Product[]}> = async () => {
  const { Client } = require('@notionhq/client')
  const dotenv = require('dotenv')
  dotenv.config()
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const databaseId = process.env.NOTION_DATABASE_ID || ''

  let products: Product[] = []

  try {
    const response = await notion.databases.query({
        database_id: databaseId,
    })

    response.results.forEach((product: any) => {
      const {properties, id} = product

      const finalProduct: Product = {
        name: properties.Name?.title[0]?.plain_text || '',
        description: properties.Description?.rich_text,
        img: properties.Image.files[0]?.file?.url || '',
        caption: properties.Caption?.rich_text,
        offer: properties.Offer?.select?.name,
        id
      }
      products.push(finalProduct)
    })
  } catch (error: any){
      console.log(error)
  }
  
  return { props: { products } }
}

export default function Home({products}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const mainOfferProducts = products.filter(product => product.offer === 'Main').reverse()
  const secondaryOfferProducts = products.filter(product => product.offer === 'Secondary').reverse()

  return (
    <>
      <Head>
        <title>EXCELSIOR</title>
        <meta name="description" content="Why don't you to make the most of something at any time of the day or night?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex-col px-4 md:px-24 items-center pt-48">
          <article className='hero gap-4 h-min'>
            {
              mainOfferProducts.slice(0, 4).map((product, index) =>{
                return (
                  <Link key={index} href={'/product/'+product.id} className='relative'>
                    <img src={product.img} alt={product.caption} className='w-full h-full object-cover hover:scale-105'/>
                    {index===0 && <span className='absolute bottom-0 text-7xl text-black m-4 invert prata'>BUY NOW</span>}
                  </Link>
                )
              })
            }
            <div className='flex h-100'>
              <h1 className='text-6xl md:text-8xl md:leading-[5rem] self-end'>40%<br/><span className='text-5xl md:text-6xl'>Discount</span></h1>
              <h3 className='uppercase ml-auto text-end font-bold'>
                Full Size<br/>
                Sample Size<br/>
                Single-Serve<br/>
                11g (0.4 Oz)
              </h3>
            </div>
            <div>
              <h2 className='text-end text-3xl'>Our selection of coffee and filters</h2>
              <div className='overflow-hidden md:overflow-visible'>
                <img className='mix-blend-multiply scale-150 mt-8 md:scale-[2] pointer-events-none object-contain' src="https://cdn.discordapp.com/attachments/911206419280314442/1126235534973468682/Frame_11.png" alt="" />
              </div>
            </div>
          </article>
          <h2 className='text-center text-3xl mt-24 mb-12'>Pick your brewer of selection</h2>
          <article className='hero gap-4 h-min mt-auto'>
            <div>
              <img className='mix-blend-multiply md:scale-150 pointer-events-none' src="https://cdn.discordapp.com/attachments/911206419280314442/1126296592413118594/Frame_12.png" alt="" />
            </div>
            {
              secondaryOfferProducts.slice(0,3).map((product, index) =>{
                return (
                  <Link key={index} href={'/product/'+product.id}>
                    <img src={product.img} alt={product.caption} className='w-full h-full object-cover hover:scale-105'/>
                  </Link>
                )
              })
            }
            <div className='flex h-100'>
              <h1 className='text-8xl leading-[4rem] self-end text-end ml-auto'>25%<br/><span className='text-6xl'>Discount</span></h1>
            </div>
            {
              secondaryOfferProducts.slice(3,4).map((product, index) =>{
                return (
                  <Link key={index} href='/'>
                    <img src={product.img} alt={product.caption} className='w-full h-full object-cover hover:scale-105'/>
                  </Link>
                )
              })
            }
          </article>
        </section>
        <section className='flex-col pt-48 items-center pb-28'>
          <h1 className='text-center text-3xl'>The complete <span className='logo'>EXCELSIOR</span> catalog</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-72 md:w-[35rem] mt-24 px-12'>
          {
            products.map((product, index) => {
              return (
              <Link key={index} href={'/product/'+product.id} className='border-none p-0'>
                <img src={product.img} alt={product.caption} className='w-full h-full object-cover hover:scale-105'/>
              </Link>
              )
            })
          }
          </div>
        </section>
      </main>
    </>
  )
}
