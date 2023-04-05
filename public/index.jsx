import Head from 'next/head'
import Profile from '@/components/Profile'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <Head>
      <title>TMO on Houk</title>
    </Head>
      <main className=' bg-white px-10 font-poppins'>
        <Navbar />
        
      </main>
    </>
  )
}