"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  title: string;
  category: string;
  image: string;
}

export function GalleryClient({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-xs uppercase tracking-[0.1em] font-semibold rounded-full border transition-all ${
              activeCategory === cat
                ? "bg-accent text-white border-accent"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-2 lg:columns-3 gap-0 space-y-0">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden"
            onClick={() => setSelected(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={800}
              unoptimized
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-white/70 text-xs uppercase tracking-[0.1em]">{item.category}</span>
              <span className="text-white font-serif text-lg mt-1">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-accent transition-colors z-10"
            onClick={() => setSelected(null)}
          >
            &#10005;
          </button>
          <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selected.image}
              alt={selected.title}
              width={1200}
              height={1600}
              unoptimized
              className="max-h-[90vh] w-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-xs uppercase tracking-[0.1em] text-accent block mb-1">{selected.category}</span>
              <span className="text-white font-serif text-2xl">{selected.title}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
