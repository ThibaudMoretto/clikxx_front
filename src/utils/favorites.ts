export const getFavorites = () =>
  typeof window !== 'undefined' &&
  JSON.parse(localStorage.getItem('favorites') || '[]');
