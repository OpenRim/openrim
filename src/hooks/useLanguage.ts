import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language, i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return { currentLanguage: i18n.language, changeLanguage, t: i18n.t };
};

export default useLanguage;
