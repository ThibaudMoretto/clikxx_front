import Link from 'next/link';
import Image from 'next/image';

import { FavoriteButton } from 'src/components/shared/favoriteButton';

import { VideoApi } from 'types/video';

import styles from './videoCard.module.scss';

export const VideoCard = ({ video }: VideoApi) => {
  return (
    <div className={styles.videoCard}>
      <>
        <div className={styles.source}>{video.source}</div>
        <div className={styles.thumb}>
          <Link
            href={{ pathname: `/video`, query: { id: video.id } }}
            key={video.id}
          >
            <Image
              src={video.default_thumb}
              alt={video.title}
              layout="fill"
              objectFit="cover"
            />
          </Link>
          <FavoriteButton videoId={video.id} source={video.source} />
        </div>

        <div className={styles.details}>
          <Link
            href={{ pathname: `/video`, query: { id: video.id } }}
            key={video.id}
          >
            <a className={styles.title}>{video.title}</a>
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
