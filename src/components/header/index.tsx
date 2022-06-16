import Image from 'next/image';

import { Navbar } from './navbar';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="Pinkx Logo" width={75} height={25} />
        <span>
          Pink<span className={styles.x}>x</span>
        </span>
      </div>
      <Navbar />
    </header>
  );
};
