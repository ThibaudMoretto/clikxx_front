// import NextCors from 'middleware';

import { getFavorites } from 'src/utils/favorites';

export const useFavorites = () => {
  const favoriteVideos = getFavorites();

  console.log('favoriteVideos', favoriteVideos);

  return { favoriteVideos };
};
