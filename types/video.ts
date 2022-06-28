import { SOURCES } from 'src/constants/sources';

export interface VideoApi {
  video: Video;
}

export interface Video {
  added: string;
  default_thumb: VideoThumb;
  duration: string;
  embed: string;
  id: string;
  keywords: Array<string>;
  rate: string;
  source: SOURCES;
  thumbs: Array<VideoThumb>;
  title: string;
  url: string;
  views: number;
}

type VideoThumb = {
  height: number;
  size: string;
  src: string;
  width: number;
};

export interface EpornerVideo extends Video {
  added: string;
  default_thumb: VideoThumb;
  embed: string;
  id: string;
  keywords: Array<string>;
  length_min: string;
  length_sec: number;
  rate: string;
  source: SOURCES.eporner;
  thumbs: Array<VideoThumb>;
  title: string;
  url: string;
  views: number;
}

export interface RedtubeVideo {
  video: {
    default_thumb: string;
    duration: string;
    embed_url: string;
    publish_date: string;
    rating: string;
    ratings: number;
    source: SOURCES.redtube;
    tags: Array<{ tag_name: string }>;
    thumb: string;
    thumbs: Array<VideoThumb>;
    title: string;
    url: string;
    video_id: string;
    views: number;
  };
}

export interface Favorite {
  source: SOURCES;
  videoId: string;
}
