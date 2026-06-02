import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang } from "./i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: typeof translations["fr"] };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
