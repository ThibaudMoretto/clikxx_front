import Link from 'next/link';
import Image from 'next/image';

import { FavoriteButton } from 'src/components/shared/favoriteButton';

import { VideoApi } from 'types/video';

import styles from './videoCard.module.scss';

export const VideoCard = ({ video }: VideoApi) => {
  const handleSelectVideo = () => {
    localStorage.setItem('video', JSON.stringify(video));
  };

  console.log(video);

  return (
    <div className={styles.videoCard}>
      <>
        <div className={`${styles.source} ${styles[video.source]}`}>
          {video.source}
        </div>
        <div className={styles.thumb}>
          <Link
            href={{
              pathname: `/video`,
            }}
          >
            <a onClick={handleSelectVideo}>
              <Image
                src={video.default_thumb}
                alt={video.title}
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
          <FavoriteButton video={video} />
        </div>

        <div className={styles.details}>
          <Link
            href={{
              pathname: `/video`,
            }}
          >
            <a className={styles.title} onClick={handleSelectVideo}>
              {video.title}
            </a>
          </Link>
          <div className={styles.content}>
            <span>{`Length: ${video.duration}`}</span>
            <span>{`${video.views} views`}</span>
            <span>&#11088;{` ${video.rate}`}</span>
          </div>
        </div>
      </>
    </div>
  );
};
