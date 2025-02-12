export interface EditPackageFile {
  name: string;
  url: string;
}

export interface EditPackage {
  name: string;
  description: string;
  files: EditPackageFile[];
  author?: string;
  category: string;
}

export const editPackages: EditPackage[] = [
  {
    name: "91 GB Overlays",
    description: "Profesyonel overlay paketi",
    category: "overlay",
    files: [
      {
        name: "Part 1",
        url: "https://drive.google.com/file/d/1lnV1ICbdqWjfx8H6BH6kTrYlMz5_oLMF/view?usp=sharing"
      },
      {
        name: "Part 2",
        url: "https://drive.google.com/file/d/1e1jZMMh_J61xaPlVN_KudzCGH7rWuJUg/view?usp=sharing"
      },
      {
        name: "Part 3",
        url: "https://drive.google.com/file/d/1td7HgFGh6P0mEkWIBet_sMGlMxzzobCJ/view?usp=sharing"
      },
      {
        name: "Part 4",
        url: "https://drive.google.com/file/d/1weO5tgCVBIOlECr1d47BS-WrkTVDgmU7/view?usp=sharing"
      },
      {
        name: "Part 5 (Mega.nz)",
        url: "https://mega.nz/file/QPgkUQoA#zH2gROj6VJvj7RKxzgJ8-VP0BU29cxdC00zq23fWsjc"
      }
    ]
  },
  {
    name: "17 GB PNG Assets",
    description: "Yüksek kaliteli PNG assetler",
    category: "png-assets",
    files: [
      {
        name: "Part 1",
        url: "https://drive.google.com/file/d/1pNOi9xb-pYSjymAZpbz3hHxNI_9pxg8d/view?usp=sharing"
      },
      {
        name: "Part 2",
        url: "https://drive.google.com/file/d/1tGH6pHr2sIiWnGKHwsAiyfIgz08T7lwO/view?usp=sharing"
      }
    ]
  },
  {
    name: "SFX Paketi",
    description: "1.53 GB ses efekti koleksiyonu",
    category: "sfx",
    files: [
      {
        name: "Tek Part",
        url: "https://drive.google.com/file/d/1TxOX2PzjOZh8kCdoCSglQ3FslI81-uYG/view?usp=sharing"
      }
    ]
  },
  {
    name: "MVM Editing Pack",
    description: "Profesyonel video edit paketi",
    category: "video",
    files: [
      {
        name: "İndirme Linki",
        url: "https://youtu.be/Xrmv0opdkAU"
      }
    ]
  },
  {
    name: "DEER EDITS",
    description: "Popüler edit paketi",
    category: "social-media",
    files: [
      {
        name: "İndirme Linki",
        url: "https://www.youtube.com/watch?v=YmejIM0nGBU"
      }
    ]
  },
  {
    name: "JEXIBITCH PACK",
    description: "Instagram edit paketi",
    category: "social-media",
    files: [
      {
        name: "Instagram Profili",
        url: "https://www.instagram.com/jexibitch/"
      }
    ]
  }
]; 