export const getFavorites = (): Array<string> =>
  typeof window !== 'undefined' &&
  JSON.parse(localStorage.getItem('favorites') || '[]');
