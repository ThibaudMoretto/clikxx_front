import { VideoCard } from '../shared/videoCard';

import styles from './videoList.module.scss';

export const VideoList = ({ videos }: any) => {
  const videosSorted = videos.sort(() => Math.random() - 0.5);

  console.log(videosSorted);

  return (
    <div className={styles.videoList}>
      {videosSorted.map((video: any, index: number) => {
        return index % 5 === 0 && index !== 0 ? (
          <iframe
            src="https://sefsdvc.com/en/us/media/dynamic/id?zid=11922&pid=0&custom1=&custom2=60670&custom3=%7Btransaction_id%7D&custom6=&custom7=PUB_225144&cturl=https://t.irtyf.com/ihxg01j1ds?file_id=252623&aff_id=225144&offer_id=3788&aff_sub=&url="
            scrolling="no"
            frameBorder="0"
          />
        ) : (
          <VideoCard key={video.id} video={video} />
        );
      })}
    </div>
  );
};
