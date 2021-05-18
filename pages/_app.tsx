import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@module/Header';
import Footer from '@module/Footer';
import Wrapper from '@module/Wrapper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
const devMode = process.env.NODE_ENV === 'development';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {devMode && <ReactQueryDevtools />}
      </QueryClientProvider>
      <Footer />
    </Wrapper>
  );
}

export default MyApp;
