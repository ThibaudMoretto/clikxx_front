import { useRouter } from 'next/router';

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
  const router = useRouter();

  const trendySearches = [
    'Katsuni',
    'Anal',
    'Outside',
    'Double',
    'Teen with not teen',
  ];

  const categories = ['Teen', 'Asian', 'Amateur', 'Lesbian'];

  useHandleClickClosePanel(ref, setSearchPanelIsOpen);

  const handleSearch = (searchValue: string) => {
    router.push({
      pathname: '/search',
      query: { query: searchValue },
    });
  };

  return (
    <div className={styles.searchPanel}>
      <span className={styles.close} id="closePanelButton">
        X
      </span>
      {trendySearches.length > 0 && (
        <div className={styles.trendySearches}>
          <h2>Trendy searches</h2>
          <ul id="trendyList">
            {trendySearches.map((value: string, index: number) => (
              <li
                key={index}
                onClick={(e: any) => handleSearch(e.target.innerText)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={styles.categories}>
        <h2>Browse categories</h2>
        <ul id="categories">
          {categories.map((category: string, index: number) => (
            <li
              key={index}
              onClick={(e: any) => handleSearch(e.target.innerText)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
