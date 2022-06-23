import { VideoCard } from '../shared/videoCard';

import styles from './videoList.module.scss';

export const VideoList = ({ videos }: any) => {
  const videosList = videos.sort(() => Math.random() - 0.5);

  return (
    <div className={styles.videoList}>
      {videosList.map((video: any) => {
        return <VideoCard key={video.id} video={video} />;
      })}
    </div>
  );
};
