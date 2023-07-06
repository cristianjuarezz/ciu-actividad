import Head from 'next/head'
import Link from "next/link";
//import { Inter } from '@next/font/google'
//const inter = Inter({ subsets: ['latin'] })
 
export default function Home() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section className="flex-col px-4 md:px-24 pt-48 md:pt-40 pb-16 md:pb-0">
          <article className='flex flex-col md:flex-row gap-4'>
            <img className='w-full md:w-96 object-cover' src='https://japanesecoffeeco.com/cdn/shop/t/11/assets/ourstory_kei.jpg?v=30222951709718137801637775287' alt='Our team' />
            <div className='w-40%'>
              <h1 className='text-7xl prata'>About Our Founder: Kei Nishida</h1>
              <p className='mt-8 max-w-[40ch] text-justify'>Kei Nishida is renowned as an award-winning green tea and coffee enthusiast, writer & CEO. He has published three books on the topic of tea. He has also had his articles featured in multiple magazines, including Fresh Cup Magazine. After establishing the widely successful Japanese Green Tea Co, he decided to branch out into Japanese Coffee. With the creation of Japanese Coffee Co, he hopes many more people around the world can enjoy the unique delight of Sumiyaki Coffee.</p>
            </div>
            <div>
              <img className='invert mix-blend-exclusion' src="https://img.freepik.com/premium-vector/woman-sipping-his-morning-coffee-happy-female-holding-cup-drink-coffee-during-breakfast_326694-440.jpg" alt="" />
              <h3 className='w-72 prata opacity-60 text-end'>Why don't you to make the most of something at any time of the day or night?</h3>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
