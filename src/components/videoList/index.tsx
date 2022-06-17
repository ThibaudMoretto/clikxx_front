import { VideoCard } from './videoCard';

import styles from './videoList.module.scss';

export const VideoList = ({ videos }: any) => {
  const { videos: videosList } = videos;

  return (
    <div className={styles.videoList}>
      {videosList.map((video: any) => {
        return <VideoCard key={video.id} video={video} />;
      })}
    </div>
  );
};