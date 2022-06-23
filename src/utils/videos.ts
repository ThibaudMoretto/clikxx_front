export const getRandomVideo = () => {
  let videoList = [];

  if (typeof window !== 'undefined') {
    videoList = JSON.parse(localStorage.getItem('randomList') || '[]');
  }
  const randomVideo = videoList
    ? videoList[Math.floor(Math.random() * videoList.length)]
    : '';

  return randomVideo;
};
