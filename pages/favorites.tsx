import { getFavorites } from 'src/utils/favorites';

import { VideoCard } from 'src/components/shared/videoCard';

import { Video } from 'types/video';

import styles from 'styles/Favorites.module.scss';

function Favorites() {
  const favoriteVideos = getFavorites();

  return (
    <div className={styles.favorites}>
      <h1>Your &#10084; videos</h1>

      <div className={styles.videos}>
        {favoriteVideos === [] ? (
          <div>Loading...</div>
        ) : (
          <>
            {favoriteVideos.map((video: Video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Favorites;
