import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Video } from 'types/video';

import { VideoList } from 'src/components/videoList';

import { useVideoListSerializer } from 'src/hooks/useVideoListSerializer';

import styles from 'styles/Home.module.scss';

export const getStaticProps = async () => {
  const eporner = await fetch(
    'https://www.eporner.com/api/v2/video/search/?query=teen&thumbsize=big&order=latest&lq=0'
  );
  const epornerVideos = await eporner.json();

  const redtube = await fetch(
    'https://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&thumbsize=big&order=newest'
  );
  const redtubeVideos = await redtube.json();

  return {
    props: {
      epornerVideos,
      redtubeVideos,
    },
  };
};

const Home: NextPage = ({ epornerVideos, redtubeVideos }: any) => {
  const videoList: any = useVideoListSerializer({
    epornerVideos,
    redtubeVideos,
  });

  const [videos, setVideos] = useState([]);

  useEffect(() => setVideos(videoList), []);

  useEffect(() => {
    const embedLinks = videos.map((video: Video) => ({
      embed: video.embed,
      title: video.title,
    }));
    localStorage.setItem('randomList', JSON.stringify(embedLinks));
  }, [videos]);

  return (
    <div className={styles.home}>
      <h1>Have a nice time browsing Pinkx !</h1>
      <VideoList videos={videos} />
    </div>
  );
};

export default Home;
