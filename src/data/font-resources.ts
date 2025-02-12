export interface FontResource {
  name: string;
  url: string;
  type: 'youtube' | 'website';
}

export const fontResources: FontResource[] = [
  {
    name: "En İyi Fontlar Playlist",
    url: "https://www.youtube.com/playlist?list=PLqQrB_35KhV8wNHAOx1UhJBXMTnxp5gdS",
    type: "youtube"
  },
  {
    name: "Google Fonts",
    url: "https://fonts.google.com/",
    type: "website"
  },
  {
    name: "Font Squirrel",
    url: "https://www.fontsquirrel.com/",
    type: "website"
  }
]; 