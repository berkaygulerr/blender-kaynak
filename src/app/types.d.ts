declare module "@/data/youtube-channels" {
  export interface YouTubeChannel {
    name: string;
    url: string;
    description?: string;
  }
  export const youtubeChannels: YouTubeChannel[];
}

declare module "@/data/texture-sites" {
  export interface TextureSite {
    name: string;
    url: string;
    category: string;
    isFree: boolean;
  }
  export const textureSites: TextureSite[];
}

// Diğer veri tipleri için benzer şekilde devam edin 