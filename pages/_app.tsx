import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@module/Header';
import Footer from '@module/Footer';
import Wrapper from '@module/Wrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Wrapper>
  );
}

export default MyApp;
