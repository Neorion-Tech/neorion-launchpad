export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: { services: "Services", about: "À propos", contact: "Contact" },
    hero: {
      kicker: "Startup numérique • 2026",
      title: "Innover. Connecter. Explorer.",
      subtitle:
        "Neorion-Tech accompagne les entreprises dans leur transformation numérique grâce à des solutions innovantes, sécurisées et adaptées à leurs besoins.",
      cta: "Démarrer un projet",
      ctaAlt: "Découvrir nos services",
    },
    services: {
      kicker: "Nos expertises",
      title: "Des solutions de bout en bout",
      subtitle:
        "Une équipe pluridisciplinaire pour bâtir, sécuriser et faire évoluer vos plateformes.",
      items: [
        { t: "Web & Mobile", d: "Développement de plateformes web et mobiles sur mesure, performantes et évolutives." },
        { t: "IA & Automatisation", d: "IA métier, agents intelligents et automatisation de vos processus stratégiques." },
        { t: "Cloud, DevOps & Cybersécurité", d: "Infrastructure cloud, CI/CD et sécurisation de bout en bout de vos systèmes." },
        { t: "Intégration ERP / CRM", d: "Intégration et interconnexion de vos systèmes ERP, CRM et outils métiers." },
        { t: "Design UI / UX", d: "Interfaces élégantes, ergonomiques et centrées utilisateur." },
        { t: "Charte graphique & supports", d: "Identité visuelle, charte graphique et supports print & digitaux." },
      ],
    },
    about: {
      kicker: "À propos",
      title: "Construisons l'avenir numérique, ensemble.",
      body:
        "Fondée en 2026, Neorion-Tech est une startup malgache passionnée par l'innovation. Nous combinons ingénierie logicielle, design et expertise métier pour livrer des produits numériques à fort impact.",
      stats: [
        { v: "2026", l: "Année de création" },
        { v: "6+", l: "Domaines d'expertise" },
        { v: "100%", l: "Sur-mesure" },
      ],
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Nos réalisations",
      subtitle: "Quelques projets que nous avons conçus, développés et déployés.",
      more: "Voir plus",
      visit: "Voir le projet",
    },
    tech: {
      kicker: "Stack technique",
      title: "Les technologies que nous maîtrisons",
    },
    contact: {
      kicker: "Contact",
      title: "Parlons de votre projet",
      subtitle: "Une idée, un besoin, un défi ? Notre équipe vous répond rapidement.",
      email: "Écrivez-nous",
      follow: "Suivez-nous",
    },
    footer: {
      tagline: "Innover • Connecter • Explorer",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: { services: "Services", about: "About", contact: "Contact" },
    hero: {
      kicker: "Digital startup • 2026",
      title: "Innovate. Connect. Explore.",
      subtitle:
        "Neorion-Tech supports companies in their digital transformation with innovative, secure and tailor-made solutions.",
      cta: "Start a project",
      ctaAlt: "Discover our services",
    },
    services: {
      kicker: "Our expertise",
      title: "End-to-end digital solutions",
      subtitle: "A multidisciplinary team to build, secure and scale your platforms.",
      items: [
        { t: "Web & Mobile", d: "Custom web and mobile platforms, performant and scalable." },
        { t: "AI & Automation", d: "Business AI, intelligent agents and process automation." },
        { t: "Cloud, DevOps & Cybersecurity", d: "Cloud infrastructure, CI/CD and end-to-end security." },
        { t: "ERP / CRM Integration", d: "Integration and interconnection of your ERP, CRM and business tools." },
        { t: "UI / UX Design", d: "Elegant, ergonomic and user-centered interfaces." },
        { t: "Branding & print/digital", d: "Visual identity, brand guidelines and print & digital assets." },
      ],
    },
    about: {
      kicker: "About",
      title: "Let's build the digital future, together.",
      body:
        "Founded in 2026, Neorion-Tech is a Malagasy startup passionate about innovation. We combine software engineering, design and domain expertise to deliver high-impact digital products.",
      stats: [
        { v: "2026", l: "Founded" },
        { v: "6+", l: "Areas of expertise" },
        { v: "100%", l: "Tailor-made" },
      ],
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Our recent work",
      subtitle: "A selection of projects we designed, built and shipped.",
      more: "View more",
      visit: "Visit project",
    },
    tech: {
      kicker: "Tech stack",
      title: "Technologies we master",
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your project",
      subtitle: "An idea, a need, a challenge? Our team replies fast.",
      email: "Email us",
      follow: "Follow us",
    },
    footer: {
      tagline: "Innovate • Connect • Explore",
      rights: "All rights reserved.",
    },
  },
} as const;
