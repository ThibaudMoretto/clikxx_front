import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Video } from 'types/video';

import { VideoList } from 'src/components/videoList';

import { useVideoListSerializer } from 'src/hooks/useVideoListSerializer';

import { UnderConstruction } from 'src/components/underConstruction';

import youpornVids from '../data/yp1000.json';
import xVideosVids from '../data/xv1.json';

import styles from 'styles/Home.module.scss';

export const getStaticProps = async () => {
  const eporner = await fetch(
    'https://www.eporner.com/api/v2/video/search/?query=teen&thumbsize=big&order=latest&lq=0'
  );
  const epornerVideos = await eporner.json();

  const redtube = await fetch(
    'https://api.redtube.com/?data=redtube.Videos.searchVideos&order=newest'
  );
  const redtubeVideos = await redtube.json();

  const youpornVideos = youpornVids.slice(0, 30);

  const xVideosVideos = xVideosVids.slice(0, 30);

  return {
    props: {
      epornerVideos,
      redtubeVideos,
      youpornVideos,
      xVideosVideos,
    },
  };
};

const Home: NextPage = ({
  epornerVideos,
  redtubeVideos,
  youpornVideos,
  xVideosVideos,
}: any) => {
  const videoList: any = useVideoListSerializer({
    epornerVideos,
    redtubeVideos,
    youpornVideos,
    xVideosVideos,
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
      {process.env.NODE_ENV === 'production' && <UnderConstruction />}
      <a
        href="https://t.aagm.link/225144/6950/0?bo=3511,3512,3521,3522&file_id=549434"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.largeBanner}
      >
        <img
          src="https://www.imglnkd.com/6950/010745A_ISTRP_18_ALL_EN_125_L.gif"
          width="728"
          height="90"
        />
      </a>

      <a
        href="https://t.acam.link/225144/2994/optimized?bo=2779,2778,2777,2776,2775&file_id=562011&po=6533"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shortBanner}
      >
        <img
          src="https://www.imglnkd.com/2994/panties_2021-EN.gif"
          width="300"
          height="100"
        />
      </a>
      <VideoList videos={videos} />
    </div>
  );
};

export default Home;
