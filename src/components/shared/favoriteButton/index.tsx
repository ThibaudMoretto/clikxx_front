import { useFavoriteButton } from './useFavoriteButton';

import { Video } from 'types/video';

import styles from './favoriteButton.module.scss';

interface FavoriteButtonProps {
  video: Video;
}

export const FavoriteButton = (video: FavoriteButtonProps) => {
  const { addFavorite, isFavorite, removeFavorite } = useFavoriteButton(video);

  return (
    <div className={styles.favoriteButton}>
      <input
        onClick={isFavorite ? removeFavorite : addFavorite}
        type="button"
        value="&hearts;"
        className={isFavorite ? styles.isFavorite : ''}
      />
    </div>
  );
};
