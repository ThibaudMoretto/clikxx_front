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
        <title>Clikxx</title>
        <meta name="description" content="Pinkx is a porn oriented website" />
        <link rel="favicon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}></div>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};
