// hooks/useTranslation.ts
import { translations } from "../utils/translations";
import { useLanguage } from "./useLanguage";

export const useTranslation = () => {
  const { language, isLoading } = useLanguage();

  const t = (key: keyof typeof translations.en) => {
    return (
      translations[language as keyof typeof translations][key] ||
      translations.en[key]
    );
  };

  return { t, isLoading };
};
