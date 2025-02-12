export interface TextureSite {
  name: string;
  url: string;
  category: 'texture' | 'reference' | 'both';
  isFree: boolean;
  description?: string;
}

export const textureSites: TextureSite[] = [
  {
    name: "CC0 Textures",
    url: "https://www.cc0textures.com/",
    category: "texture",
    isFree: true,
    description: "Ücretsiz PBR materyaller"
  },
  {
    name: "Texture Haven",
    url: "https://texturehaven.com/",
    category: "texture",
    isFree: true,
    description: "Yüksek kaliteli ücretsiz textureler"
  },
  {
    name: "Textures.com",
    url: "https://www.textures.com/howItWorks",
    category: "texture",
    isFree: false,
    description: "Freemium model ile çalışan texture sitesi"
  },
  {
    name: "Joost3D Textures",
    url: "https://joost3d.com/textures/",
    category: "texture",
    isFree: true
  },
  {
    name: "3D Total Textures",
    url: "https://freetextures.3dtotal.com/",
    category: "texture",
    isFree: true
  },
  {
    name: "Megascans",
    url: "https://megascans.se/library/free",
    category: "both",
    isFree: true,
    description: "Yüksek kaliteli 3D tarama ve textureler"
  },
  {
    name: "3D Textures",
    url: "https://3dtextures.me/",
    category: "texture",
    isFree: true
  },
  {
    name: "HDRI Haven",
    url: "https://hdrihaven.com/",
    category: "reference",
    isFree: true,
    description: "Ücretsiz HDR görüntüler"
  },
  {
    name: "TextureLib",
    url: "https://texturelib.com/",
    category: "texture",
    isFree: true,
    description: "Çeşitli kategorilerde ücretsiz texture'ler"
  },
  {
    name: "Wild Textures",
    url: "https://www.wildtextures.com/",
    category: "texture",
    isFree: false
  },
  {
    name: "GameTextures",
    url: "https://gamestextures.com/en/",
    category: "texture",
    isFree: false
  },
  {
    name: "Blender Cloud",
    url: "https://cloud.blender.org/p/textures/",
    category: "texture",
    isFree: false
  },
  {
    name: "OpenGameArt",
    url: "https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=14&sort_by=count&sort_order=DESC",
    category: "texture",
    isFree: true
  },
  {
    name: "Environment Textures",
    url: "https://www.environment-textures.com/photos/search/query/free-textures/thumb/small/page/1",
    category: "texture",
    isFree: true
  },
  {
    name: "Itch.io Textures",
    url: "https://itch.io/game-assets/free/tag-texture",
    category: "texture",
    isFree: true
  },
  {
    name: "Space 3D",
    url: "http://wwwtyro.github.io/space-3d",
    category: "reference",
    isFree: true
  },
  {
    name: "Planet 3D",
    url: "http://wwwtyro.github.io/planet-3d/",
    category: "reference",
    isFree: true
  },
  {
    name: "Texture Ninja",
    url: "https://texture.ninja/",
    category: "texture",
    isFree: true
  },
  {
    name: "Renderman",
    url: "https://renderman.pixar.com/pixar-one-twenty-eight",
    category: "texture",
    isFree: true
  },
  {
    name: "3DXO",
    url: "https://www.3dxo.com/textures",
    category: "texture",
    isFree: false
  },
  {
    name: "Arroway Textures",
    url: "https://www.arroway-textures.ch/",
    category: "texture",
    isFree: false
  },
  {
    name: "3DTexture.net",
    url: "http://www.3dtexture.net/",
    category: "texture",
    isFree: true
  },
  {
    name: "CGTextures",
    url: "http://cgtextures.com/",
    category: "texture",
    isFree: false
  },
  {
    name: "TextureVault",
    url: "http://texturevault.com/",
    category: "texture",
    isFree: false
  },
  {
    name: "Texturez",
    url: "http://texturez.com/",
    category: "texture",
    isFree: true
  },
  {
    name: "Mayang Textures",
    url: "http://mayang.com/textures",
    category: "texture",
    isFree: true
  },
  {
    name: "1000Skies",
    url: "http://1000skies.com/",
    category: "reference",
    isFree: true
  },
  {
    name: "Lugher Texture",
    url: "http://lughertexture.com/",
    category: "texture",
    isFree: true
  },
  {
    name: "Amazing Textures",
    url: "http://amazingtextures.com/",
    category: "texture",
    isFree: true
  },
  {
    name: "Arrowway Textures",
    url: "http://arrowway-textures.com/",
    category: "texture",
    isFree: true
  },
  {
    name: "Textures Forrest",
    url: "http://textures.forrest.cz/",
    category: "texture",
    isFree: true
  },
  {
    name: "Texture Portal",
    url: "http://textureportal.com/",
    category: "texture",
    isFree: true
  },
  {
    name: "Texture Mill",
    url: "https://texturemill.com/",
    category: "texture",
    isFree: false
  },
  {
    name: "Abduzeedo Textures",
    url: "https://abduzeedo.com/tags/textures",
    category: "texture",
    isFree: true
  },
  {
    name: "Doug Turner Textures",
    url: "http://www.dougturner.net/blendersite/",
    category: "texture",
    isFree: true
  }
]; 