import dayjs from 'dayjs';

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
  const epornerVideosList = epornerVideos.videos.map((video: EpornerVideo) => {
    const added = dayjs(video.added).format('YYYY-MM-DD');

    return {
      added,
      default_thumb: video.default_thumb,
      duration: video.length_min,
      embed: video.embed,
      id: video.id,
      keywords: video.keywords,
      rate: video.rate,
      source: SOURCES.eporner,
      thumbs: video.thumbs,
      title: video.title,
      url: video.url,
      views: video.views,
    };
  });

  const redtubeVideosList = redtubeVideos.videos.map(
    ({ video }: RedtubeVideo) => {
      const keywords = video.tags.map(
        (tag: { tag_name: string }) => tag.tag_name
      );

      const added = dayjs(video.publish_date).format('YYYY-MM-DD');

      const default_thumb =
        video.thumbs[Math.floor(video.thumbs.length / 2 - 1)].src;

      return {
        added,
        default_thumb,
        duration: video.duration,
        embed: video.embed_url,
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

  const videosList = [...epornerVideosList, ...redtubeVideosList];

  return videosList;
};
