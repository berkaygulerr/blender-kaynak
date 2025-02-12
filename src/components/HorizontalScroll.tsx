'use client';

export function HorizontalScroll({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
      <div className="flex gap-4 flex-nowrap px-1 min-w-max">
        {children}
      </div>
    </div>
  );
}

// Kullanımı:
<HorizontalScroll>
  {data.map(item => (
    <div className="w-64 flex-shrink-0">{/* Kart içeriği */}</div>
  ))}
</HorizontalScroll> 