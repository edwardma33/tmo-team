import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="favicon.png" rel="shortcut icon" type="image/x-icon" />
      </Head>
      <body className=' bg-white dark:bg-black px-10 font-poppins'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
