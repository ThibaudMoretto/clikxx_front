import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { getFavorites } from 'src/utils/favorites';

import styles from './videoCard.module.scss';

export const VideoCard = ({ video }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = () => {
    const favorites = getFavorites();
    if (!favorites.includes(video.id) && typeof window !== 'undefined') {
      favorites.push(video.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(true);
  };

  const removeFavorite = () => {
    const favorites = getFavorites();
    if (favorites.includes(video.id) && typeof window !== 'undefined') {
      const favoritesArray = favorites.filter(
        (fav: string) => fav !== video.id
      );
      localStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
    setIsFavorite(false);
  };

  useEffect(() => {
    const favorites = getFavorites();
    if (favorites.includes(video.id)) {
      setIsFavorite(true);
    }
  }, []);

  return (
    <div className={styles.videoCard}>
      <div className={styles.source}>Eporner</div>
      <div className={styles.thumb}>
        <Link
          href={{ pathname: `/videos`, query: { id: video.id } }}
          key={video.id}
        >
          <Image
            src={video.default_thumb.src}
            alt={video.title}
            layout="fill"
            objectFit="cover"
          />
        </Link>
      </div>

      <div className={styles.details}>
        <Link
          href={{ pathname: `/videos`, query: { id: video.id } }}
          key={video.id}
        >
          <a className={styles.title}>{video.title}</a>
        </Link>
        <span>{`Length: ${video.length_min}`}</span>
        <span>{`Rate: ${video.rate}`}</span>
        <span>{`Viewed ${video.views} times`}</span>

        {isFavorite ? (
          <input
            onClick={removeFavorite}
            type="button"
            value="&#10084;"
            className={styles.isFavorite}
          />
        ) : (
          <input onClick={addFavorite} type="button" value="&#10084;" />
        )}
      </div>
    </div>
  );
};
