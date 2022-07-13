import { Video } from 'types/video';

export const getFavorites = (): Array<Video> =>
  (typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem('favorites') || '[]')) ||
  [];