import { useEffect, useState } from 'react';

import { Video } from 'types/video';

import { getFavorites } from 'src/utils/favorites';

import styles from 'styles/Favorites.module.scss';

function Favorites() {
  const [data, setData] = useState<Array<Video>>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const favorites = getFavorites();

  const favoriteVideos: Array<Video> = [];

  useEffect(() => {
    setLoading(true);

    for (const id of favorites) {
      fetch(`https://www.eporner.com/api/v2/video/id/?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          favoriteVideos.push(data);
        });
    }

    setData(favoriteVideos);
    setLoading(false);
  }, []);

  return (
    <div className={styles.favorites}>
      <h1>Your &#10084; videos</h1>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map((video) => (
            <li key={video.id}>
              <a href={`/videos/${video.id}`}>{video.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
