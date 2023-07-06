import Head from 'next/head'
//import Link from "next/link";
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
            <iframe className='w-full md:w-[55%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12958.92660159019!2d139.65545871738277!3d35.70822069999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f297328cdb43%3A0xdd5719eafbcd71e3!2sExcelsior%20Caff%C3%A9!5e0!3m2!1ses-419!2sar!4v1688684178223!5m2!1ses-419!2sar" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className='flex flex-col mt-4 md:mt-0'>
              <h1 className='text-7xl prata'>We'd love to hear from you|</h1>
              <p className='mt-8 max-w-[40ch] text-justify text-xs mt-12 md:mt-auto opacity-60'>Our company Japanese Green Tea Co. brings the best green teas available in Japan to international tea lovers. Now, we are delighted to inform you, that our new company—Japanese Coffee Co., is the first & only company that brings the best Sumiyaki Coffee from Japan to the rest of the world too.</p>
            </div>
            <img className='w-80 mix-blend-exclusion invert saturate-0 object-contain' src="https://img.freepik.com/premium-vector/young-man-with-hot-cup-coffee-hand-drawn-line-art-style_76775-301.jpg?w=2000" alt="" />
          </article>
        </section>
      </main>
    </>
  )
}
