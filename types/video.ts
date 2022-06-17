export interface Video {
  added: string;
  default_thumb: VideoThumb;
  embed: string;
  id: string;
  keywords: string;
  length_min: string;
  length_sec: number;
  rate: string;
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
