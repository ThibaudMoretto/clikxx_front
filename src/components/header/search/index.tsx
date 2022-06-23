import { useRef, useState } from 'react';
import Image from 'next/image';

import { getRandomVideo } from 'src/utils/videos';

import { useHandleClickOutsidePanel } from './useHandleClickOutsidePanel';

import styles from './search.module.scss';

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchPanelIsOpen, setSearchPanelIsOpen] = useState<boolean>(false);

  const panelRef = useRef(null);
  useHandleClickOutsidePanel(panelRef, setSearchPanelIsOpen);

  const trendySearches = ['Katsuni', 'Anal', 'Outside', 'Double'];

  const categories = ['Teen', 'Asian', 'Amateur', 'Lesbian'];

  const handleSearchChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setSearchValue(value);
  };

  const randomVideo = getRandomVideo();

  const handleSearchSubmit = (e: any) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
    }
  };

  return (
    <div
      className={styles.search}
      onClick={() => setSearchPanelIsOpen(true)}
      ref={panelRef}
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => handleSearchChange(e)}
        placeholder="Search videos..."
        onKeyDown={handleSearchSubmit}
      />
      <Image src="/search.svg" alt="search" width={25} height={25} />
      {searchPanelIsOpen && (
        <div className={styles.searchPanel}>
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
      )}
    </div>
  );
};
