import { AppProps } from 'next/app';
import Head from 'next/head';
import { StrictMode } from 'react';
import { RouteGuard } from '../components/shared/RouteGuard';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StrictMode>
        <RouteGuard>
          <Head>
            <title>Welcome to web!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </RouteGuard>
      </StrictMode>
    </>
  );
}

export default CustomApp;
