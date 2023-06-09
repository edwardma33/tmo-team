import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Question from '@/components/Question'

export default function Faqs() {
  const foo = [];

  for (let i = 0; i < 6; i++) {
    foo.push(<Question index={i} />)
  }

  return (
    <>
    <Head>
      <title>TMO on Houk | FAQs</title>
    </Head>
    <Navbar />
    <h1 className=' font-poppins text-magenta text-6xl text-center pb-10'>FAQs</h1>
    <main className=' mx-auto px-10 xl:columns-2 dark:text-white'>
      {foo.map(bar => {
        return bar
      })}
    </main>
    </>
  )
}

