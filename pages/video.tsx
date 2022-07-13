import { useEffect, useState } from 'react';

import { FavoriteButton } from 'src/components/shared/favoriteButton';

import { Video } from 'types/video';

import styles from 'styles/Videos.module.scss';

function Videos() {
  const [video, setVideo] = useState<Video>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setVideo(JSON.parse(localStorage.getItem('video') || ''));
    }
  }, []);

  return (
    <div className={styles.videos}>
      {video && (
        <>
          <div className={styles.content}>
            <h1>{video.title}</h1>
            <iframe src={video.embed}></iframe>{' '}
            <div className="details">
              <span>Added : {video.added}</span>
              <span>From : {video.source}</span>
            </div>
            <FavoriteButton video={video} />
          </div>

          <div className={styles.adsSection}>
            <iframe
              src="https://sefsdvc.com/en/us/media/dynamic/id?zid=11923&pid=0&custom1=&custom2=60671&custom3=%7Btransaction_id%7D&custom6=&custom7=PUB_225144&cturl=https://t.irtyf.com/ihxg01j1ds?file_id=252622&aff_id=225144&offer_id=3664&aff_sub=&url="
              scrolling="no"
              frameBorder="0"
            />
            <iframe
              src="https://sefsdvc.com/en/us/media/dynamic/id?zid=11922&pid=0&custom1=&custom2=60670&custom3=%7Btransaction_id%7D&custom6=&custom7=PUB_225144&cturl=https://t.irtyf.com/ihxg01j1ds?file_id=252623&aff_id=225144&offer_id=3788&aff_sub=&url="
              scrolling="no"
              frameBorder="0"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Videos;
