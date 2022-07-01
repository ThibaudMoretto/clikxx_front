import { getRandomVideo } from 'src/utils/videos';

import { useHandleClickClosePanel } from './useHandleClickClosePanel';

import styles from './searchPanel.module.scss';

interface SearchPanelProps {
  ref: React.RefObject<HTMLDivElement>;
  setSearchPanelIsOpen: (arg0: boolean) => void;
}

export const SearchPanel = ({
  ref,
  setSearchPanelIsOpen,
}: SearchPanelProps) => {
  console.log(ref);

  const randomVideo = getRandomVideo();

  const trendySearches = [
    'Katsuni',
    'Anal',
    'Outside',
    'Double',
    'Teen with not teen',
  ];

  const categories = ['Teen', 'Asian', 'Amateur', 'Lesbian'];

  useHandleClickClosePanel(ref, setSearchPanelIsOpen);

  return (
    <div className={styles.searchPanel}>
      <span className={styles.close} id="closePanelButton">
        X
      </span>
      {trendySearches.length > 0 && (
        <div className={styles.trendySearches}>
          <h2>Trendy searches</h2>
          <ul>
            {trendySearches.map((value: string, index: number) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      <div className={styles.categories}>
        <h2>Browse categories</h2>
        <ul>
          {categories.map((category: string, index: number) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
      <div className={styles.suggestion}>
        <h2>Dont know what to watch ? Check this out !</h2>
        <iframe src={randomVideo.embed} allowFullScreen />
      </div>
    </div>
  );
};
