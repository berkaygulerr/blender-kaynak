import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeSwitcher } from "@/components/theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blender Kaynakları",
  description: "Blender öğrenmek için kapsamlı kaynak koleksiyonu",
  keywords: ["blender", "3d", "modelleme", "texture", "referans", "eğitim"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <ThemeSwitcher />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
