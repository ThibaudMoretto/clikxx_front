import Head from 'next/head';
import { Footer } from '../footer';
import { Navbar } from '../navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="content">
      <Head>
        <title>Pinkx</title>
        <meta name="description" content="Pinkx is a porn oriented website" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <Navbar />

      {children}

      <Footer />
    </div>
  );
};
