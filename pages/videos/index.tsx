import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Video } from 'types/video';

import styles from 'styles/Videos.module.scss';

function Videos() {
  const {
    back,
    query: { id: videoId },
  } = useRouter();

  const [data, setData] = useState<Video>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.eporner.com/api/v2/video/id/?id=${videoId}`, {})
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  console.log(data);

  return (
    <div className={styles.videos}>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <>
          <button onClick={back}> {'<'} Go back</button>
          <h1>{data.title}</h1>
          <iframe src={data.embed} allowFullScreen></iframe>
          <div className="details">
            <span>Added : {data.added}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Videos;
