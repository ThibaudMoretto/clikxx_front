import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="Pinkx Logo" width={75} height={25} />
        <span>
          Pink<span className={styles.x}>x</span>
        </span>
      </div>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/streams">
          <a>Streams 24/7</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
};
