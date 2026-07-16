import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} Photography — our story, philosophy, and the person behind the lens.`,
};

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Weddings Captured" },
    { number: "12+", label: "Years Experience" },
    { number: "50+", label: "Destinations" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const timeline = [
    { year: "2012", title: "First Camera", desc: "Started with a borrowed DSLR, shooting family events and learning the craft." },
    { year: "2015", title: "First Paid Wedding", desc: "Booked my first wedding as a professional — realized this was my calling." },
    { year: "2018", title: "Studio Established", desc: "Opened Photopark Studio in Nellore, built a dedicated team." },
    { year: "2022", title: "500 Weddings", desc: "Milestone reached — hundreds of love stories documented across India." },
    { year: "2024", title: "Award Winner", desc: "Recognized as Top Wedding Photographer in Andhra Pradesh." },
  ];

  return (
    <>
      <section className="pt-16 bg-fg">
        <div className="container-max py-20 text-center">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-4">About</p>
          <h1 className="font-serif text-4xl md:text-6xl text-bg leading-tight mb-6">
            Capturing Moments That Last Forever
          </h1>
          <p className="text-bg/50 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            With over a decade of experience, I specialize in wedding, portrait, and event photography across Nellore and beyond. My approach blends photojournalistic authenticity with fine-art aesthetics.
          </p>
          <p className="text-bg/50 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Every couple has a unique story — I&apos;m here to tell yours through images that feel as real as the moments themselves.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-bg/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-accent">📍</span>
              <span>Nellore &middot; Kavali &middot; Hyderabad</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Hyd Branch</span>
              <a href="https://instagram.com/warmweddingfilms" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@warmweddingfilms</a>
            </div>
            <div className="flex items-center gap-2">
              <span>For Babies</span>
              <a href="https://instagram.com/photo_park_babys" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@photo_park_babys</a>
            </div>
            <div className="flex items-center gap-2">
              <span>Kavali Branch</span>
              <a href="https://instagram.com/kavali_kids_studio" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@kavali_kids_studio</a>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+917981857999" className="hover:text-accent transition-colors">7981857999</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/about.png"
                alt="Photographer at work"
                width={600}
                height={800}
                className="w-full h-auto object-cover aspect-[3/4] rounded-2xl"
                priority
              />
            </div>
            <div>
              <p className="overline mb-4">My Journey</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                More Than Just a Photographer
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  With over a decade of experience behind the lens, I believe every couple has a unique love story waiting to be told. My approach blends photojournalistic authenticity with fine-art aesthetics — capturing not just how your day looked, but how it felt.
                </p>
                <p>
                  What started as a passion for capturing candid family moments has grown into a full-fledged career behind the camera. Over the years, I&apos;ve had the privilege of documenting hundreds of weddings, portraits, and celebrations — each with its own unique energy and emotion.
                </p>
                <p>
                  My approach is simple: be present, be patient, and let the moments unfold naturally. I believe the best photographs happen when people forget the camera is there — when genuine laughter, tears, and love shine through without pretense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted section-gap">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="overline mb-3">By the Numbers</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">What I&apos;ve Achieved</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-fg font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-muted uppercase tracking-[0.1em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="overline mb-3">Timeline</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">The Journey So Far</h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            {timeline.map((item, i) => (
              <div key={i} className="relative mb-12">
                <div className="absolute left-6 md:left-1/2 top-2 w-4 h-4 rounded-full bg-accent border-4 border-bg -translate-x-1/2 z-10" />
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12 md:ml-1/2"}`}>
                  <div className="bg-surface p-6 rounded-xl">
                    <div className="text-accent text-xs uppercase tracking-[0.15em] font-semibold mb-1">{item.year}</div>
                    <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fg section-gap">
        <div className="container-max max-w-3xl mx-auto text-center">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-4">My Philosophy</p>
          <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed italic text-bg mb-6">
            &ldquo;Photography is the story I fail to put into words.&rdquo;
          </blockquote>
          <p className="text-bg/50 leading-relaxed">
            I don&apos;t just take pictures — I curate visual narratives. Every couple brings their own energy, culture, and chemistry. My job is to understand that unique dynamic and translate it into images that feel authentic, elegant, and deeply personal.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
            Let&apos;s Create Your Story
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Every love story deserves to be told beautifully. Let&apos;s talk about how we can capture yours.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
