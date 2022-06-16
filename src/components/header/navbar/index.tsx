import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/random">
        <a>Random</a>
      </Link>
      <Link href="/streams">
        <a>Channels 24/7</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};
