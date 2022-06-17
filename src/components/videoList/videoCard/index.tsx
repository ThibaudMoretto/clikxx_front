import Link from 'next/link';
import Image from 'next/image';

import styles from './videoCard.module.scss';

export const VideoCard = ({ video }: any) => {
  return (
    <Link
      href={{ pathname: `/videos`, query: { id: video.id } }}
      key={video.id}
    >
      <div className={styles.video}>
        <Image
          src={video.default_thumb.src}
          alt={video.title}
          width={200}
          height={150}
        />
        <div className={styles.details}>
          <span className={styles.title}>{video.title}</span>
          <span>{`Length: ${video.length_min}`}</span>
          <span>{`Rate: ${video.rate}`}</span>
          <span>{`Viewed ${video.views} times`}</span>

          <button>Add to favorites</button>
        </div>
      </div>
    </Link>
  );
};
