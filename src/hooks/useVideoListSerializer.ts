import { EpornerVideo, RedtubeVideo } from 'types/video';

import { SOURCES } from 'src/constants/sources';

interface UseVideoListSerializerArgs {
  epornerVideos: any;
  redtubeVideos: any;
}

export const useVideoListSerializer = ({
  epornerVideos,
  redtubeVideos,
}: UseVideoListSerializerArgs) => {
  const epornerVideosList = epornerVideos.videos.map((video: EpornerVideo) => ({
    ...video,
    duration: video.length_min,
    source: SOURCES.eporner,
  }));

  const redtubeVideosList = redtubeVideos.videos.map(
    ({ video }: RedtubeVideo) => {
      const keywords = video.tags.map(
        (tag: { tag_name: string }) => tag.tag_name
      );

      return {
        added: video.publish_date,
        default_thumb: video.default_thumb,
        duration: video.duration,
        id: video.video_id,
        keywords,
        rate: video.rating,
        source: SOURCES.redtube,
        thumbs: video.thumbs,
        title: video.title,
        url: video.url,
        views: video.views,
      };
    }
  );

  console.log(epornerVideosList);

  return [...epornerVideosList, ...redtubeVideosList];
};
