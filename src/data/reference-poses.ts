export interface ReferencePackage {
  name: string;
  url: string;
  poses: {
    name: string;
    description: string;
    imageCount: number;
    category: string;
  }[];
}

export const referencePoses: ReferencePackage[] = [
  {
    name: "Referans Poz Seti 1",
    url: "https://drive.google.com/drive/folders/1a8fO4UNFnaY34wwVZv20N5_uBXKCNwVw",
    poses: [
      {
        name: "720+ Oturma Pozu Referansı",
        description: "Çeşitli oturma pozisyonları",
        imageCount: 720,
        category: "oturma"
      },
      {
        name: "450+ Günlük Erkek Poz Referansı",
        description: "Günlük yaşamdan erkek pozları",
        imageCount: 450,
        category: "erkek"
      },
      {
        name: "310+ Erkek Hareket Poz Referansı",
        description: "Aksiyon ve hareket pozisyonları",
        imageCount: 310,
        category: "hareket"
      },
      {
        name: "350+ Akademik Kadın Poz Referansı",
        description: "Akademik çizimler için kadın pozları",
        imageCount: 350,
        category: "akademik"
      },
      {
        name: "350+ Kadın Poz Referansı",
        description: "Genel kadın pozisyonları",
        imageCount: 350,
        category: "kadın"
      },
      {
        name: "280+ Kadın Sanat Poz Referansı",
        description: "Sanatsal çizimler için kadın pozları",
        imageCount: 280,
        category: "sanat"
      }
    ]
  },
  {
    name: "Referans Poz Seti 2",
    url: "https://drive.google.com/drive/folders/1jAX9ltMhqIXl1ANjYZTXeNFAsLLRoJx-",
    poses: [] // Set 2 için detayları ekleyebilirsiniz
  }
]; 