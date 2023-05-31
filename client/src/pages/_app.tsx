
import '@/styles/bootstrap.min.css'
import '@/styles/bootstrap-icons.css'
import '@/styles/templatemo-kind-heart-charity.css'

import type { AppProps } from 'next/app'
import { NormalizeCSS, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { SWRConfig } from 'swr'
import { ToastContainer } from 'react-toastify'
// import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'


const App = ({ Component, pageProps }: AppProps) => {
    return (
      <>
      <html lang="ar" dir="rtl">
      <Head>
        <meta/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        <title>الجمعية الخيرية الإسلامية بأسفي</title>
        </Head>
        <body id="section_1">
          <NormalizeCSS />
          <MantineProvider>
              <ModalsProvider>
                  <SWRConfig
                      value={{
                          // エラー時リトライ回数
                          errorRetryCount: 0,
                          // windowフォーカス時再取得しない
                          revalidateOnFocus: false
                      }}
                  >
                      <Component {...pageProps} />
                  </SWRConfig>
              </ModalsProvider>
          </MantineProvider>
          <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar
              style={{ fontSize: 14, fontWeight: 'bold' }}
          />
         </body>
      </html>
      </>
  )
}

export default App
