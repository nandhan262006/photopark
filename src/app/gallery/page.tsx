import type { Metadata } from "next";
import { galleryItems, siteConfig } from "@/lib/data";
import { GalleryClient } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our portfolio of wedding, pre-wedding, maternity, baby, and event photography in Hyderabad, Nellore & Kavali.",
  openGraph: {
    title: "Gallery | Photopark Photography",
    description: "Browse our portfolio of wedding, pre-wedding, maternity, baby, and event photography.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function GalleryPage() {
  const categories = [...new Set(galleryItems.map((i) => i.category))];

  return (
    <>
      <section className="pt-16 bg-fg">
        <div className="container-max py-20 text-center">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-4">Gallery</p>
          <h1 className="font-serif text-4xl md:text-6xl text-bg leading-tight">Our Work</h1>
          <p className="text-bg/50 mt-4 max-w-xl mx-auto leading-relaxed">
            A curated collection of our favorite moments — weddings, portraits, and celebrations captured with passion.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-max">
          <GalleryClient items={galleryItems} categories={categories} />
        </div>
      </section>

      <section className="bg-fg section-gap">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-bg mb-6">
            Love What You See?
          </h2>
          <p className="text-bg/50 leading-relaxed mb-8">
            Ready to create your own beautiful collection? Let&apos;s start planning your story.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !border-accent !text-accent hover:!bg-accent hover:!text-white"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
