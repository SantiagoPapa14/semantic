"use client";

import { useLanguage } from "../../hooks/useLanguage";
import { useState, useEffect } from "react";

type Language = {
  code: string;
  name: string;
  flag?: string;
};

const SUPPORTED_LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇦🇷" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export const LanguageSelector = () => {
  const { language, changeLanguage, isLoading } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || isLoading) {
    return null;
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value as "en" | "es" | "fr");
  };

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={handleLanguageChange}
        className="appearance-none py-1 pl-2 pr-8 rounded-md cursor-pointer"
        aria-label="Select language"
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="flex items-center"
          >
            {lang.flag}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
