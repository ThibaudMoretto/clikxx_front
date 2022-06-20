import { useEffect, useState } from 'react';

import { VideoCard } from 'src/components/shared/videoCard';

import { VideoDefinition } from 'types/video';

import { getFavorites } from 'src/utils/favorites';

import styles from 'styles/Favorites.module.scss';

function Favorites() {
  const [data, setData] = useState<Array<VideoDefinition>>();

  useEffect(() => {
    const favorites = getFavorites();

    const favoriteVideos: Array<VideoDefinition> = [];

    (async () => {
      for (const favorite of favorites) {
        const { videoId } = favorite;

        await fetch(`https://www.eporner.com/api/v2/video/id/?id=${videoId}`)
          .then((res) => res.json())
          .then((fetchedData: VideoDefinition) => {
            favoriteVideos.push(fetchedData);
          });
      }
      setData(favoriteVideos);
    })();
  }, []);

  return (
    <div className={styles.favorites}>
      <h1>Your &#10084; videos</h1>
      <div className={styles.videos}>
        {data === [] ? (
          <div>Loading...</div>
        ) : (
          <>
            {data?.map((video: VideoDefinition) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Favorites;
