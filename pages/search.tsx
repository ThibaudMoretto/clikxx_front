import { useRouter } from 'next/router';

import { useSearch } from 'src/hooks/useSearch';
import { useVideoListSerializer } from 'src/hooks/useVideoListSerializer';

import { VideoList } from 'src/components/videoList';

import styles from 'styles/Search.module.scss';

export const Search = () => {
  const router = useRouter();

  const searchValue = router.query.query as string;

  const {
    epornerVideos = [],
    youpornVideos = [],
    xVideosVideos = [],
  } = useSearch(searchValue);

  const videos: any = useVideoListSerializer({
    epornerVideos,
    youpornVideos,
    xVideosVideos,
  });

  return (
    <div className={styles.search}>
      <a
        href="https://t.aagm.link/225144/6950/0?bo=3511,3512,3521,3522&file_id=549434"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.largeBanner}
      >
        <img
          src="https://www.imglnkd.com/6950/010745A_ISTRP_18_ALL_EN_125_L.gif"
          width="728"
          height="90"
        />
      </a>

      <a
        href="https://t.acam.link/225144/2994/optimized?bo=2779,2778,2777,2776,2775&file_id=562011&po=6533"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shortBanner}
      >
        <img
          src="https://www.imglnkd.com/2994/panties_2021-EN.gif"
          width="300"
          height="100"
        />
      </a>
      <span className={styles.title}>Results for : {router.query.query}</span>
      <VideoList videos={videos} />
    </div>
  );
};

export default Search;
