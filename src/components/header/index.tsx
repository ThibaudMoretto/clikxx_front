import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from './navbar';
import { Search } from './search';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.menu}>
          <Image
            src="/burgerMenu.png"
            alt="burger menu"
            width={35}
            height={35}
          />
        </div>
        <Link href={'/'}>
          <a className={styles.logo}>
            <div className={styles.logoImage}>
              <Image src="/logo.svg" alt="Pinkx Logo" width={75} height={25} />
            </div>
            <span>
              Clik<span className={styles.x}>xx</span>
            </span>
          </a>
        </Link>
        {process.env.NODE_ENV === 'development' && <Search />}
      </div>
      <Navbar />
    </header>
  );
};
