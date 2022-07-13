import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { FavoriteButton } from 'src/components/shared/favoriteButton';

import { getRandomVideo } from 'src/utils/videos';

import styles from 'styles/Random.module.scss';

function Random() {
  const [video, setVideo] = useState<any>();

  const { reload } = useRouter();

  useEffect(() => {
    const randomVideo = getRandomVideo();
    setVideo(randomVideo);
  }, []);

  return (
    <div className={styles.random}>
      {video && (
        <>
          <h1>{video.title}</h1>
          <iframe src={video.embed} />
          <input type="button" value="Another one, please !" onClick={reload} />
          <FavoriteButton video={video} />
        </>
      )}
    </div>
  );
}

export default Random;
