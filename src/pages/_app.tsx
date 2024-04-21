import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { Providers } from '@/providers/providers'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
