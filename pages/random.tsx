import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

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
      <h1>Random</h1>
      <input type="button" value="Another one, please !" onClick={reload} />
      {video && <iframe src={video.embed} />}
    </div>
  );
}

export default Random;
