export interface ReferencePose {
  name: string;
  poses: {
    title: string;
    count: number;
  }[];
  sets: {
    name: string;
    url: string;
  }[];
}

export const referencePoses: ReferencePose[] = [
  {
    name: "Çizim & Güzel Sanatlar Referans Pozları",
    poses: [
      { title: "Oturma Pozu Referansı", count: 720 },
      { title: "Günlük Erkek Poz Referansı", count: 450 },
      { title: "Erkek Hareket Poz Referansı", count: 310 },
      { title: "Akademik Kadın Poz Referansı", count: 350 },
      { title: "Kadın Poz Referansı", count: 350 },
      { title: "Kadın Sanat Poz Referansı", count: 280 }
    ],
    sets: [
      {
        name: "Set 1 - Temel Koleksiyon",
        url: "https://drive.google.com/drive/folders/1a8fO4UNFnaY34wwVZv20N5_uBXKCNwVw"
      },
      {
        name: "Set 2 - İleri Seviye",
        url: "https://drive.google.com/drive/folders/1jAX9ltMhqIXl1ANjYZTXeNFAsLLRoJx-"
      }
    ]
  }
]; 