import '@/styles/globals.css'
import type { AppType } from 'next/app'
import type { Session } from 'next-auth'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SessionProvider } from 'next-auth/react'
config.autoAddCss = false

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
