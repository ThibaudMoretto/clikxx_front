import Link from 'next/link';

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
        <a>Pinkx TV</a>
      </Link>
      <Link href="/favorites">
        <a>Favorites</a>
      </Link>
    </nav>
  );
};
