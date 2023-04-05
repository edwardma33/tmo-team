import React, { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import ContactCard from '@/components/ContactCard'
import tmoContacts from './api/tmoContact'




export default function Contact() {
  return (
    <>
    <Head>
      <title>TMO on Houk | Contact</title>
    </Head>
    <Navbar currentPage={2} />
    <h1 className=' font-poppins text-magenta text-6xl text-center pb-10'>Contacts</h1>
    <main className=' mx-auto px-10 md:columns-2'>
      <ContactCard index={0} />
      <ContactCard index={1} />
      <ContactCard index={2} />
      <ContactCard index={3} />
    </main>
    
    </>
  )
}

