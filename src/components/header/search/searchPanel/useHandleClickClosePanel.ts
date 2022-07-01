import { useEffect } from 'react';

export function useHandleClickClosePanel(
  ref: any,
  callback: (arg0: boolean) => void
) {
  useEffect(() => {
    function handleClickClosePanel(event: any) {
      if (ref?.current && !ref.current.contains(event.target)) {
        callback(false);
      }
      console.log(ref);
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
