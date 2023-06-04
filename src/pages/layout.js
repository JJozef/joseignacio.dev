import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ className = '', children }) {
  return (
    <>
      <Head>
        <title>Jose Ignacio</title>
        <meta name='description' content='Personal website of Jose Ignacio' />
        <meta
          name='keywords'
          content='Jose Ignacio, Jozefzin, Jose, Ignacio, Jozef, Jozefzin, JozefzinDev'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${className} ${inter.className}`}>{children}</main>
    </>
  )
}
