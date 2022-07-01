import { useFavoriteButton } from './useFavoriteButton';

import { SOURCES } from 'src/constants/sources';

import styles from './favoriteButton.module.scss';

interface FavoriteButtonProps {
  source: SOURCES;
  videoId: string;
}

export const FavoriteButton = ({ source, videoId }: FavoriteButtonProps) => {
  const { addFavorite, isFavorite, removeFavorite } = useFavoriteButton({
    source,
    videoId,
  });

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
