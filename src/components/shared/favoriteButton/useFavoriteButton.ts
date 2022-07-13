import { useEffect, useState } from 'react';

import { Video } from 'types/video';

import { getFavorites } from 'src/utils/favorites';

export function useFavoriteButton({ video }: any) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { id: videoId } = video;

  useEffect(() => {
    const favorites = getFavorites();
    if (favorites.filter((favorite) => favorite.id === videoId).length > 0) {
      setIsFavorite(true);
    }
  }, []);

  const addFavorite = () => {
    const favorites = getFavorites();

    if (
      !favorites.find((favorite) => favorite.id === videoId) &&
      typeof window !== 'undefined'
    ) {
      favorites.push(video);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(true);
  };

  const removeFavorite = () => {
    const favorites = getFavorites();
    if (
      favorites.filter((favorite) => favorite.id === videoId).length > 0 &&
      typeof window !== 'undefined'
    ) {
      const favoritesArray = favorites.filter(
        (fav: Video) => fav.id !== videoId
      );
      localStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
    setIsFavorite(false);
  };

  return { isFavorite, addFavorite, removeFavorite };
}
