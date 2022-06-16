import Head from 'next/head';
import { Footer } from '../footer';
import { Header } from '../header';

import styles from './layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Pinkx</title>
        <meta name="description" content="Pinkx is a porn oriented website" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};
