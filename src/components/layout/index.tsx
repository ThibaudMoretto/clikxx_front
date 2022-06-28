import Head from 'next/head';
import Script from 'next/script';
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

      {/* Google Tag Manager */}
      {process.env.NODE_ENV === 'production' && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NXBVGVS');
  `,
          }}
        />
      )}
      {/* End Google Tag Manager */}

      <Header />

      {/* <!-- Google Tag Manager (noscript) --> */}
      {process.env.NODE_ENV === 'production' && (
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXBVGVS"
            height="0"
            width="0"
          ></iframe>
        </noscript>
      )}
      {/* <!-- End Google Tag Manager (noscript) --> */}

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};
