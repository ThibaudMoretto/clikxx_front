import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../src/components/footer';
import { Navbar } from '../src/components/navbar';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Pink<span>x</span>
        </h1>
      </main>
    </div>
  );
};

export default Home;
