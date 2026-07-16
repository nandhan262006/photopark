import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-fg text-bg/60">
      <div className="container-max py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 space-y-3">
            <p className="font-serif text-xl text-bg">{siteConfig.name}</p>
            <p className="text-sm">{siteConfig.tagline}</p>
          </div>
          <div>
            <h4 className="text-bg text-xs uppercase tracking-[0.15em] font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              {["Home", "Gallery", "About", "Contact"].map((p) => (
                <li key={p}>
                  <Link href={p === "Home" ? "/" : `/${p.toLowerCase()}`} className="text-sm hover:text-accent transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-bg text-xs uppercase tracking-[0.15em] font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Weddings", "Pre-Wedding", "Portraits", "Events"].map((s) => (
                <li key={s} className="text-sm">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-bg text-xs uppercase tracking-[0.15em] font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">{siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phone}`} className="hover:text-accent transition-colors">{siteConfig.phone}</a></li>
              <li><Link href="https://instagram.com/photoparkphotography" target="_blank" className="hover:text-accent transition-colors">{siteConfig.instagram}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-bg/10">
        <div className="container-max py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-bg/40">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name} Photography. All rights reserved.</p>
          <p>{siteConfig.address}</p>
        </div>
      </div>
    </footer>
  );
}
