import { createFileRoute } from "@tanstack/react-router";
import { LangProvider, useLang } from "@/lib/lang-context";
import logoAsset from "@/assets/neorion-logo.png.asset.json";
import heroBg from "@/assets/hero-space.jpg";
import {
  Code2,
  Brain,
  Cloud,
  Network,
  Palette,
  Sparkles,
  ArrowRight,
  Mail,
  Linkedin,
  Facebook,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neorion-Tech — Innover • Connecter • Explorer" },
      {
        name: "description",
        content:
          "Neorion-Tech accompagne les entreprises dans leur transformation numérique : web & mobile, IA, cloud, cybersécurité, ERP/CRM, UI/UX.",
      },
      { property: "og:title", content: "Neorion-Tech — Innover • Connecter • Explorer" },
      {
        property: "og:description",
        content: "Startup numérique 2026. Solutions innovantes, sécurisées et sur-mesure.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: () => (
    <LangProvider>
      <Page />
    </LangProvider>
  ),
});

function Header() {
  const { lang, setLang, t } = useLang();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Neorion-Tech" className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-accent transition-colors">{t.nav.services}</a>
          <a href="#about" className="hover:text-accent transition-colors">{t.nav.about}</a>
          <a href="#contact" className="hover:text-accent transition-colors">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center text-xs font-semibold rounded-full border border-border overflow-hidden">
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1.5 transition-colors ${lang === "fr" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
            >FR</button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
            >EN</button>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity">
            {t.nav.contact} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-hero text-white pt-16">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur text-xs uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> {t.hero.kicker}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            {t.hero.title.split(".").map((w, i) =>
              w.trim() ? (
                <span key={i} className="block">
                  {w.trim()}
                  <span className="text-[oklch(0.78_0.14_230)]">.</span>
                </span>
              ) : null,
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary font-semibold hover:shadow-glow transition-all">
              {t.hero.cta} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 hover:bg-white/10 transition-colors">
              {t.hero.ctaAlt}
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:col-span-5 justify-center">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-accent/40 rounded-full" />
            <img src={logoAsset.url} alt="Neorion-Tech logo" className="relative h-80 w-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useLang();
  const icons = [Code2, Brain, Cloud, Network, Palette, Sparkles];
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent">
            {t.services.kicker}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary">{t.services.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.services.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-elegant"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{item.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-28 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-accent">
            {t.about.kicker}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary leading-tight">
            {t.about.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t.about.body}</p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {t.about.stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-hero shadow-elegant">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logoAsset.url} alt="" className="h-2/3 w-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto bg-hero rounded-3xl p-12 md:p-16 text-white shadow-elegant relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
        <div className="relative">
          <span className="text-xs uppercase tracking-widest font-semibold text-[oklch(0.78_0.14_230)]">
            {t.contact.kicker}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">{t.contact.title}</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">{t.contact.subtitle}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:contact@neorion-tech.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary font-semibold hover:shadow-glow transition-all"
            >
              <Mail className="h-4 w-4" /> contact@neorion-tech.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/neorion-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590211066478"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Neorion-Tech" className="h-9 w-auto" />
        </div>
        <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Neorion-Tech. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
