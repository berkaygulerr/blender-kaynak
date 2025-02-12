export interface AssetSite {
  name: string;
  url: string;
  isFree: boolean;
  categories?: string[];
  description?: string;
}

export const assetSites: AssetSite[] = [
  {
    name: "NASA 3D Resources",
    url: "https://nasa3d.arc.nasa.gov/",
    isFree: true,
    categories: ["uzay", "bilimsel"],
    description: "NASA'nın 3D model koleksiyonu"
  },
  {
    name: "Sketchfab",
    url: "https://sketchfab.com/",
    isFree: false,
    categories: ["genel"],
    description: ""
  },
  {
    name: "CGTrader",
    url: "https://www.cgtrader.com",
    isFree: false,
    categories: ["genel", "karakter", "mimari"]
  },
  {
    name: "Free3D",
    url: "https://free3d.com/",
    isFree: true,
    categories: ["genel"]
  },
  {
    name: "Ambient CG",
    url: "https://ambientcg.com/list?type=3DModel,Terrain",
    isFree: true,
    categories: ["PBR", "doku", "arazi"]
  },
  {
    name: "BlendSwap",
    url: "https://www.blendswap.com/",
    isFree: true,
    categories: ["blender", "genel"],
    description: "Blender topluluğu model paylaşım platformu"
  },
  {
    name: "Thingiverse",
    url: "https://www.thingiverse.com/explore/popular",
    isFree: true,
    categories: ["3D baskı", "genel"]
  },
  {
    name: "TurboSquid",
    url: "https://www.turbosquid.com/Search/3D-Models/free",
    isFree: false,
    categories: ["genel", "profesyonel"],
    description: "Profesyonel 3D model marketi"
  },
  {
    name: "FlippedNormals",
    url: "https://flippednormals.com/",
    isFree: false,
    categories: ["profesyonel", "karakter"]
  },
  {
    name: "Hum3D",
    url: "https://hum3d.com/free/",
    isFree: true,
    categories: ["araç", "nesne"]
  },
  {
    name: "Open3DModel",
    url: "https://open3dmodel.com/",
    isFree: true,
    categories: ["genel"]
  },
  {
    name: "MyMiniFactory",
    url: "https://www.myminifactory.com/",
    isFree: true,
    categories: ["3D baskı", "figür"]
  },
  {
    name: "3D Sky",
    url: "https://3dsky.org/3dmodels",
    isFree: false,
    categories: ["mobilya", "iç mekan"]
  },
  {
    name: "Archive3D",
    url: "https://archive3d.net/",
    isFree: true,
    categories: ["genel"]
  },
  {
    name: "Clara.io",
    url: "https://clara.io/library",
    isFree: false,
    categories: ["profesyonel"]
  },
  {
    name: "3DExport",
    url: "https://3dexport.com/free-3d-models",
    isFree: true,
    categories: ["genel"]
  },
  {
    name: "SketchUp 3D Warehouse",
    url: "https://3dwarehouse.sketchup.com/",
    isFree: true,
    categories: ["mimari"]
  },
  {
    name: "CADnav",
    url: "https://www.cadnav.com/3d-models/",
    isFree: true,
    categories: ["mühendislik"]
  },
  {
    name: "All3DFree",
    url: "https://www.all3dfree.net/",
    isFree: true,
    categories: ["genel"]
  },
  {
    name: "Artist-3D",
    url: "https://artist-3d.com/",
    isFree: true,
    categories: ["karakter"]
  },
  {
    name: "Blogscopia Resources",
    url: "https://resources.blogscopia.com/",
    isFree: true,
    categories: ["genel"]
  }
]; 