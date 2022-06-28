import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { FavoriteButton } from 'src/components/shared/favoriteButton';

import { Video } from 'types/video';

import styles from 'styles/Videos.module.scss';

function Videos() {
  const { back } = useRouter();

  const [video, setVideo] = useState<Video>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setVideo(JSON.parse(localStorage.getItem('video') || ''));
    }
  }, []);

  return (
    <div className={styles.videos}>
      <button onClick={back}> {'<'} Go back</button>
      {video && (
        <>
          <h1>{video.title}</h1>
          <iframe src={video.embed}></iframe>
          <div className="details">
            <span>Added : {video.added}</span>
          </div>
          <FavoriteButton source={video.source} videoId={video.id} />
        </>
      )}
    </div>
  );
}

export default Videos;
