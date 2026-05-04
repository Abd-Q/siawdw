import { createContext, useContext, useState, ReactNode } from "react";
import ru from "./ru";
import kk from "./kk";
import en from "./en";

export type Locale = "ru" | "kk" | "en";

const locales = { ru, kk, en };
export type Translations = typeof ru;

interface I18nCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nCtx>({
  locale: "ru",
  setLocale: () => {},
  t: ru,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");
  return (
    <I18nContext.Provider value={{ locale, setLocale, t: locales[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
