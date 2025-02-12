'use client';

import { Shortcuts } from "@/components/shortcuts";
import { youtubeChannels } from "@/data/youtube-channels";
import { textureSites } from "@/data/texture-sites";
import { assetSites } from "@/data/asset-sites";
import { editPackages } from "@/data/edit-packages";
import { referencePoses } from "@/data/reference-poses";
import { inspirationSites } from "@/data/inspiration-sites";
import { shortcuts } from "@/data/shortcuts";
import { fontResources } from "@/data/font-resources";
import { useState } from 'react';
import React from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Genel filtreleme fonksiyonu
  const filterItems = (items: any[], searchFields: string[]) => {
    if (!searchTerm) return items;
    const lowerSearch = searchTerm.toLowerCase();
    
    return items.filter(item => 
      searchFields.some(field => {
        const value = item[field];
        if (Array.isArray(value)) {
          return value.some(v => v?.toString().toLowerCase().includes(lowerSearch));
        }
        return value?.toString().toLowerCase().includes(lowerSearch);
      })
    );
  };

  // Tüm bölümler için veriler
  const sections = [
    {
      title: "Eğitim Kanalları",
      data: youtubeChannels,
      component: (channel: YouTubeChannel) => (
        <a key={channel.name} href={channel.url} className="card group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-2xl">🎬</span>
            </div>
            <div>
              <h3 className="card-title">{channel.name}</h3>
              {channel.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {channel.description}
                </p>
              )}
            </div>
          </div>
        </a>
      ),
      searchFields: ['name', 'description']
    },
    {
      title: "Texture Kaynakları",
      data: textureSites,
      component: (site: TextureSite) => (
        <a key={site.name} href={site.url} className="card">
          <h3 className="card-title">{site.name}</h3>
          <div className="flex gap-2 mt-3">
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="tag tag-free inline-flex">Ücretsiz</span>
              <span className="tag tag-category">
                {site.category}
              </span>
            </div>
          </div>
        </a>
      ),
      searchFields: ['name', 'category']
    },
    {
      title: "3D Model Kaynakları",
      data: assetSites,
      component: (site: AssetSite) => (
        <a key={site.name} href={site.url} className="card">
          <h3 className="card-title">{site.name}</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            <span className="tag tag-free inline-flex">Ücretsiz</span>
            {site.categories?.map(category => (
              <span key={category} className="tag tag-category">
                {category}
              </span>
            ))}
          </div>
        </a>
      ),
      searchFields: ['name', 'categories']
    },
    {
      title: "Edit Paketleri",
      data: editPackages,
      component: (pkg: EditPackage) => (
        <div key={pkg.name} className="card">
          <h3 className="card-title">{pkg.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {pkg.description}
          </p>
          <div className="mt-4 space-y-2">
            {pkg.files.map((file, index) => (
              <a
                key={index}
                href={file.url}
                className="flex justify-between items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-medium">{file.name}</span>
              </a>
            ))}
          </div>
        </div>
      ),
      searchFields: ['name', 'description', 'files.name']
    },
    {
      title: "İlham Kaynakları",
      data: inspirationSites,
      component: (site: InspirationSite) => (
        <a key={site.name} href={site.url} className="card">
          <h3 className="card-title">{site.name}</h3>
          <span className="tag tag-category mt-3">{site.category}</span>
        </a>
      ),
      searchFields: ['name', 'category']
    },
    {
      title: "Font Kaynakları",
      data: fontResources,
      component: (font: FontResource) => (
        <a key={font.name} href={font.url} className="card">
          <h3 className="card-title">{font.name}</h3>
          <span className={`tag ${font.type === 'youtube' ? 'tag-free' : 'tag-premium'} mt-3`}>
            {font.type}
          </span>
        </a>
      ),
      searchFields: ['name', 'type']
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center mx-auto">
          Blender Kaynakları
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Blender öğrenmek için tüm ihtiyacınız olan kaynaklar tek bir yerde. 
          Ücretsiz texture'ler, 3D modeller, eğitim videoları ve daha fazlası.
        </p>
      </div>

      {/* Arama çubuğu */}
      <div className="mb-8 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Tüm kaynaklarda ara..."
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Shortcuts items={shortcuts} />

      <div className="space-y-16">
        {sections.map((section) => {
          const filteredData = filterItems(section.data, section.searchFields);
          
          return (
            <section key={section.title}>
              <h2 className="section-title">{section.title}</h2>
              {filteredData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredData.map((item, index) => 
                    React.cloneElement(section.component(item), { 
                      key: `${section.title}-${index}` 
                    })
                  )}
                </div>
              ) : (
                <div className="card p-6 text-center text-gray-500 dark:text-gray-400">
                  {searchTerm ? 
                    "Aramanızla eşleşen kaynak bulunamadı 😞" : 
                    "Bu kategoriye henüz kaynak eklenmedi ✨"
                  }
                </div>
              )}
            </section>
          );
        })}
      </div>

      <footer className="mt-16 text-center border-t border-gray-200 dark:border-gray-800 pt-8 pb-12">
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          🚀 Blender kaynak koleksiyonu - mustafa.fbx X gulerrberkay
        </p>
      </footer>
    </main>
  );
}
