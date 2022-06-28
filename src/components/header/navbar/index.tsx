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
      <a href="https://t.mbdating.link/225144/3788/0?bo=3471,3472,3473,3474,3475&po=6456">
        &#128007;
      </a>
      <Link href="/favorites">
        <a>Favorites</a>
      </Link>
    </nav>
  );
};
