import Head from 'next/head';

import Assurance from './components/Assurance';
import Doubts from './components/Doubts';
import FeedbackClients from './components/FeedbackClients';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dom Fit Suplementos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-slate-900 h-screen scrollbar-thin scrollbar-track-slate-500 scrollbar-thumb-gray-800'>                
        <Hero />
        <Info />
        <FeedbackClients />
        <Assurance />
        {/* <Doubts />
        <Footer /> */}
      </main>
    </>
  )
}
