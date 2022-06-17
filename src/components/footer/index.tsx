import Image from 'next/image';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by Pinkx{' '}
      <span className={styles.logo}>
        <Image src="/logo.svg" alt="Pinkx Logo" width={20} height={10} />
      </span>
    </footer>
  );
};
