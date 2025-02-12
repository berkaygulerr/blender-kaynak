export interface Shortcut {
  name: string;
  url: string;
  category: string;
  icon: string;
}

export const shortcuts: Shortcut[] = [
  {
    name: "Resmi Kısayol Rehberi (PDF)",
    url: "https://drive.google.com/file/d/1I0eP2t2yh7_Nu1hM8TCW8gSCd2Gv1sSz/view?fbclid=IwAR0a_YTE-2HplNNzEJNBATMQFyf-AnSD_6DHlECH5Nmrh2V1biLCSJ7dn0E",
    category: "PDF Doküman",
    icon: "📜"
  },
  {
    name: "Awesome Blender Listesi",
    url: "https://github.com/agmmnn/awesome-blender",
    category: "GitHub Repo",
    icon: "🌟"
  }
]; 