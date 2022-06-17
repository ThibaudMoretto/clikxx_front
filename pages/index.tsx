import type { NextPage } from 'next';

import { VideoList } from 'src/components/videoList';

import styles from 'styles/Home.module.scss';

export const getStaticProps = async () => {
  const response = await fetch(
    'https://www.eporner.com/api/v2/video/search/?query=teen&thumbsize=big&order=most-popular&lq=0'
  );
  const videos = await response.json();

  return {
    props: {
      videos,
    },
  };
};

const Home: NextPage = ({ videos }: any) => {
  return (
    <div className={styles.home}>
      <VideoList videos={videos} />
    </div>
  );
};

export default Home;
