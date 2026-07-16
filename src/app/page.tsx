import Image from "next/image";
import Link from "next/link";
import { services, galleryItems, reviews, siteConfig } from "@/lib/data";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import ServiceCards3D from "@/components/ServiceCards3D";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen flex items-end justify-center pb-28 overflow-hidden">
        <Image
          src="/homemobile.png"
          alt="Photopark Photography"
          fill
          className="object-cover md:hidden"
          priority
        />
        <Image
          src="/homepage.png"
          alt="Photopark Photography"
          fill
          className="object-cover hidden md:block"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-6">
            Hyderabad &nbsp;|&nbsp; Nellore &nbsp;|&nbsp; Kavali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="btn-primary bg-white !text-fg hover:!bg-accent hover:!text-white">
              View Gallery
            </Link>
            <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-fg">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="section-gap">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/about.png"
                alt="About Photopark"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <p className="overline mb-4">About</p>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
                Capturing Moments That Last Forever
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                With over a decade of experience, I specialize in wedding, portrait, and event photography across Nellore and beyond. My approach blends photojournalistic authenticity with fine-art aesthetics.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Every couple has a unique story — I&apos;m here to tell yours through images that feel as real as the moments themselves.
              </p>
              <p className="text-sm uppercase tracking-[0.15em] font-semibold text-accent mb-8">
                Hyderabad &nbsp;|&nbsp; Nellore &nbsp;|&nbsp; Kavali
              </p>
              <Link href="/about" className="btn-primary">
                More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-gap">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="overline mb-3">Portfolio</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">Recent Work</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3">
            {galleryItems.map((item, i) => (
              <div key={i} className="relative group overflow-hidden aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface-muted section-gap">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="overline mb-3">Services</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">What I Offer</h2>
          </div>

          <ServiceCards3D
            services={services.map((s, i) => ({
              id: String(i),
              title: s.title,
              description: s.description,
              imageUrl: s.image,
            }))}
          />
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="section-gap">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="overline mb-3">Featured Stories</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">Recent Weddings</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Priya & Rahul", date: "Dec 2024", location: "Nellore", image: "/gallery2.png", excerpt: "A three-day celebration of love, tradition, and joy — from the Mehendi to the Mandap." },
            ].map((story, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
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
          <div className="text-center mt-10">
            <Link href="/stories" className="btn-outline">
              View More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-surface-muted section-gap">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-serif text-xl">4.9</span>
              <span className="text-xs text-muted">127 reviews</span>
            </div>
            <p className="overline mb-3">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">What Clients Say</h2>
          </div>

          <ReviewCarousel reviews={reviews} />
        </div>
      </section>

{/* CTA */}
      <section className="bg-fg section-gap">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-bg mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-bg/50 leading-relaxed mb-8">
            Let&apos;s turn your special moments into timeless memories. Whether it&apos;s a wedding, pre-wedding shoot, or any celebration — I&apos;d love to be part of your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-accent !text-accent hover:!bg-accent hover:!text-white"
            >
              Message on WhatsApp
            </a>
            <Link href="/contact" className="btn-outline !border-bg !text-bg hover:!bg-bg hover:!text-fg">
              Contact Me
            </Link>
          </div>
          
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
    </div>
  );
}
