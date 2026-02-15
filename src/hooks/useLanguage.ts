"use client";

import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "bill-buddy-language";

const languageNames: Record<string, string> = {
  en: "English",
  cy: "Cymraeg (Welsh)",
  ur: "Urdu",
  pl: "Polski (Polish)",
  ar: "Arabic",
};

export function useLanguage() {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && languageNames[saved]) {
      setLanguageState(saved);
    }

    function handleStorage(e: StorageEvent) {
      if (e.key === STORAGE_KEY && e.newValue && languageNames[e.newValue]) {
        setLanguageState(e.newValue);
      }
    }

    function handleCustom(e: Event) {
      const lang = (e as CustomEvent<string>).detail;
      if (lang && languageNames[lang]) {
        setLanguageState(lang);
      }
    }

    window.addEventListener("storage", handleStorage);
    window.addEventListener("bill-buddy-language-change", handleCustom);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("bill-buddy-language-change", handleCustom);
    };
  }, []);

  const setLanguage = useCallback((lang: string) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    window.dispatchEvent(
      new CustomEvent("bill-buddy-language-change", { detail: lang })
    );
  }, []);

  return {
    language,
    languageName: languageNames[language] || "English",
    setLanguage,
  };
}
