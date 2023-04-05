import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Head>
      <body className=' bg-white px-10 font-poppins'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
