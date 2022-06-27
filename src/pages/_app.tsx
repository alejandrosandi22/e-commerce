//Styles
import 'styles/globals.scss';
import 'styles/Nav.scss';
import 'styles/Categories.scss';
import 'styles/Home.scss';
import 'styles/Header.scss';
import 'styles/Footer.scss';
import 'styles/Search.scss';
import 'styles/LinkEffect.scss';
import 'styles/Invoice.scss';

import Layout from '../components/layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
