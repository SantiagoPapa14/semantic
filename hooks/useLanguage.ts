// hooks/useLanguage.ts
import { useState, useEffect } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState<"en" | "es" | "fr">("en");
  const [isLoading, setIsLoading] = useState(true);

  const changeLanguage = (newLanguage: "en" | "es" | "fr") => {
    setIsLoading(true);
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    window.location.reload();
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && ["en", "es", "fr"].includes(savedLanguage)) {
      setLanguage(savedLanguage as "en" | "es" | "fr");
    }
    setIsLoading(false); // Set loading to false after initialization
  }, []);

  return { language, changeLanguage, isLoading };
};
