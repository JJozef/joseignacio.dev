import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

import '@/styles/tailwind.css'
import 'focus-visible'
import Layout from './layout'
import Preloader from '@/components/Preloader'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jose Ignacio</title>
        <meta name='description' content='Portafolio de Jose Ignacio.' />
        <meta property='og:url' content='https://www.joseignacio.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Jose Ignacio - Portafolio' />
        <meta property='og:description' content='Portafolio de Jose Ignacio.' />
        <meta
          property='og:image'
          content='https://www.joseignacio.dev/logo.jpg'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='joseignacio.dev' />
        <meta property='twitter:url' content='https://www.joseignacio.dev/' />
        <meta name='twitter:title' content='Jose Ignacio - Portafolio' />
        <meta
          name='twitter:description'
          content='Portafolio de Jose Ignacio.'
        />
        <meta
          name='twitter:image'
          content='https://www.joseignacio.dev/logo.jpg'
        />

        <link rel='icon' href='/logo.jpg' sizes='any' />
        <link rel='icon' href='/logo.jpg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/logo.jpg' />
      </Head>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <Layout>
          <Preloader />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
