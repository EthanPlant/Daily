import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppType } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
