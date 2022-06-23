import Link from 'next/link';

import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <a href="http://www.pornhub.com">AD LINK</a>
      <Link href="/random">
        <a>Random</a>
      </Link>
      <Link href="/favorites">
        <a>Favorites</a>
      </Link>
    </nav>
  );
};
