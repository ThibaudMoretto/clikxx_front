import { useEffect, useState } from 'react';

import { Favorite } from 'types/video';
import { SOURCES } from 'src/constants/sources';

import { getFavorites } from 'src/utils/favorites';

interface UseFavoriteButtonProps {
  source: SOURCES;
  videoId: string;
}

export function useFavoriteButton({ source, videoId }: UseFavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    if (
      favorites.filter((favorite) => favorite.videoId === videoId).length > 0
    ) {
      setIsFavorite(true);
    }
  }, []);

  const addFavorite = () => {
    const favorites = getFavorites();

    if (
      !favorites.find((favorite) => favorite.videoId === videoId) &&
      typeof window !== 'undefined'
    ) {
      favorites.push({ source, videoId });
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(true);
  };

  const removeFavorite = () => {
    const favorites = getFavorites();
    if (
      favorites.filter((favorite) => favorite.videoId === videoId).length > 0 &&
      typeof window !== 'undefined'
    ) {
      const favoritesArray = favorites.filter(
        (fav: Favorite) => fav.videoId !== videoId
      );
      localStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
    setIsFavorite(false);
  };

  return { isFavorite, addFavorite, removeFavorite };
}
