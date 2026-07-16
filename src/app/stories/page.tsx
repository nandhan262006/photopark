import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stories",
  description: "Featured wedding stories captured by Photopark Photography — real couples, real moments, real love.",
  openGraph: {
    title: "Stories | Photopark Photography",
    description: "Featured wedding stories captured by Photopark Photography.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const stories = [
  { title: "Priya & Rahul", date: "Dec 2024", location: "Nellore", image: "/gallery2.png", excerpt: "A three-day celebration of love, tradition, and joy — from the Mehendi to the Mandap." },
  { title: "Ananya & Karthik", date: "Nov 2024", location: "Hyderabad", image: "/gallery1.png", excerpt: "Golden hour pre-wedding shoot turned into a breathtaking visual love letter." },
  { title: "Vikram & Neha", date: "Oct 2024", location: "Kavali", image: "/gallery7.png", excerpt: "An intimate ceremony captured with candid emotion and timeless elegance." },
  { title: "Deepa & Roshan", date: "Sep 2024", location: "Nellore", image: "/gallery3.png", excerpt: "Tears, laughter, and dance — every fleeting moment preserved forever." },
  { title: "Karthik & Shreya", date: "Aug 2024", location: "Hyderabad", image: "/gallery4.png", excerpt: "Sunset silhouettes and stolen glances — a pre-wedding story for the ages." },
  { title: "Roshan & Deepa", date: "Jul 2024", location: "Kavali", image: "/gallery6.png", excerpt: "Mehendi moments filled with color, music, and pure happiness." },
];

export default function StoriesPage() {
  return (
    <>
      <section className="pt-16 bg-fg">
        <div className="container-max py-20 text-center">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-4">Stories</p>
          <h1 className="font-serif text-4xl md:text-6xl text-bg leading-tight">Featured Weddings</h1>
          <p className="text-bg/50 mt-4 max-w-xl mx-auto leading-relaxed">
            Real couples, real moments, real love — captured forever.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden mb-4">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.1em] text-muted mb-2">
                  <span className="text-accent font-semibold">{story.date}</span>
                  <span>|</span>
                  <span>{story.location}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-2 group-hover:text-accent transition-colors">{story.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{story.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fg section-gap">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-bg mb-6">
            Your Story Awaits
          </h2>
          <p className="text-bg/50 leading-relaxed mb-8">
            Let&apos;s create something beautiful together.
          </p>
          <Link href="/contact" className="btn-outline !border-accent !text-accent hover:!bg-accent hover:!text-white">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
