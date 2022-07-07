import { useEffect } from 'react';

export function useHandleClickClosePanel(
  ref: any,
  callback: (arg0: boolean) => void
) {
  useEffect(() => {
    function handleClickClosePanel() {
      callback(false);
    }

    document
      .querySelector('#closePanelButton')
      ?.addEventListener('mousedown', handleClickClosePanel);

    return () => {
      document
        .querySelector('#closePanelButton')
        ?.removeEventListener('mousedown', handleClickClosePanel);
    };
  }, [ref]);
}
