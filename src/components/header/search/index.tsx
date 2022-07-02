import { useRef, useState } from 'react';
import Image from 'next/image';

import { SearchPanel } from './searchPanel';

import { useHandleClickOutsidePanel } from './useHandleClickOutsidePanel';

import styles from './search.module.scss';

export const Search = () => {
  const [searchPanelIsOpen, setSearchPanelIsOpen] = useState<boolean>(false);

  const panelRef = useRef(null);
  useHandleClickOutsidePanel(panelRef, setSearchPanelIsOpen);

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
        placeholder="Search videos..."
        onKeyDown={handleSearchSubmit}
      />
      <Image src="/search.svg" alt="search" width={25} height={25} />
      {searchPanelIsOpen && (
        <SearchPanel
          ref={panelRef}
          setSearchPanelIsOpen={setSearchPanelIsOpen}
        />
      )}
    </div>
  );
};
