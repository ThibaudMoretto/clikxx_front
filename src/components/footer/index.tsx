import Image from 'next/image';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Pinkx{' '}
        <span className={styles.logo}>
          <Image src="/logo.svg" alt="Pinkx Logo" width={20} height={10} />
        </span>
      </a>
    </footer>
  );
};
