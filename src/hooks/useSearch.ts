import { useEffect, useState } from 'react';

import youpornDatabase from 'data/yp1000.json';
import xVideosDatabase from 'data/xv1.json';

export const useSearch = (searchValue: string) => {
  const [epornerVideos, setEpornerVideos] = useState<any[]>([]);
  const [youpornVideos, setYoupornVideos] = useState<any[]>([]);
  const [xVideosVideos, setXVideosVideos] = useState<any[]>([]);

  useEffect(() => {
    const searchEporner = async () => {
      const eporner = await fetch(
        `https://www.eporner.com/api/v2/video/search/?query=${searchValue}&order=top-weekly`
      );
      const epornerVideosList = await eporner.json();

      setEpornerVideos(epornerVideosList);
    };
    // const redtube = await fetch(
    //   'https://api.redtube.com/?data=redtube.Videos.searchVideos&order=newest'
    // );
    // const redtubeVideos = await redtube.json();

    const searchYouporn = async () => {
      const youpornSearchResults = youpornDatabase?.filter((video: any) => {
        return video.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setYoupornVideos(youpornSearchResults);
    };

    const searchXVideos = async () => {
      const xVideosSearchResults = xVideosDatabase?.filter((video: any) => {
        return video.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setXVideosVideos(xVideosSearchResults);
    };

    if (searchValue !== '') {
      searchEporner();
      searchYouporn();
      searchXVideos();
    }
  }, [searchValue]);

  return { epornerVideos, youpornVideos, xVideosVideos };
};
