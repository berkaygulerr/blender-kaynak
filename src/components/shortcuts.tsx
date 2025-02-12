interface Shortcut {
  name: string;
  url: string;
  category: string;
  icon: string;
}

export function Shortcuts({ items }: { items: Shortcut[] }) {
  return (
    <section className="mb-16">
      <h2 className="section-title text-center mb-8">
        Blender Kısayolları
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-6xl">
        {items.map((shortcut) => (
          <a
            key={shortcut.name}
            href={shortcut.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 hover:border-primary/50 transition-all group w-full sm:w-[400px]"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                {shortcut.icon}
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                  {shortcut.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {shortcut.category}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 