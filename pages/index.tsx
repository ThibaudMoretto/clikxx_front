import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        Welcome to Pink<span>x</span>
      </h1>
    </div>
  );
};

export default Home;
