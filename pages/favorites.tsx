import { useEffect, useState } from 'react';

import { VideoCard } from 'src/components/shared/videoCard';

import { SOURCES } from 'src/constants/sources';

import { Video } from 'types/video';

import { getFavorites } from 'src/utils/favorites';

import styles from 'styles/Favorites.module.scss';

function Favorites() {
  const [data, setData] = useState<Array<Video>>();

  useEffect(() => {
    const favorites = getFavorites();

    const favoriteVideos: Array<Video> = [];

    (async () => {
      for (const favorite of favorites) {
        const { source, videoId } = favorite;

        if (source === SOURCES.eporner) {
          await fetch(`https://www.eporner.com/api/v2/video/id/?id=${videoId}`)
            .then((res) => res.json())
            .then((fetchedData: Video) => {
              favoriteVideos.push(fetchedData);
            });
        }
        if (source === SOURCES.redtube) {
          await fetch(
            `https://api.redtube.com/?data=redtube.Videos.getVideoById&video_id=${videoId}`
          )
            .then((res) => res.json())
            .then((fetchedData: Video) => {
              favoriteVideos.push(fetchedData);
            });
        }
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
            {data?.map((video: Video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Favorites;
