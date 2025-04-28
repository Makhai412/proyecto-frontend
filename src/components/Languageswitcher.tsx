import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="language-switcher flex gap-2">
      <button 
        className={`px-2 py-1 rounded transition-colors ${
          i18n.language === 'es' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
        onClick={() => changeLanguage('es')}
      >
        Español
      </button>
      <button 
        className={`px-2 py-1 rounded transition-colors ${
          i18n.language === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;