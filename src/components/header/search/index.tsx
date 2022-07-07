import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { SearchPanel } from './searchPanel';

import { useHandleClickOutsidePanel } from './useHandleClickOutsidePanel';

import styles from './search.module.scss';

export const Search = () => {
  const [searchPanelIsOpen, setSearchPanelIsOpen] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const panelRef = useRef(null);
  useHandleClickOutsidePanel(panelRef, setSearchPanelIsOpen);

  const router = useRouter();

  const handleSearchSubmit = async (e: any) => {
    if (e.key === 'Enter') {
      router.push({
        pathname: '/search',
        query: { query: e.target.value },
      });
    }
  };

  useEffect(() => {
    if (!router.pathname.includes('search')) {
      setSearchInputValue('');
    }

    if (router.query.query) setSearchInputValue(router.query.query as string);

    setSearchPanelIsOpen(false);
  }, [router]);

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
        onChange={(e: any) => setSearchInputValue(e.target.value)}
        value={searchInputValue}
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
