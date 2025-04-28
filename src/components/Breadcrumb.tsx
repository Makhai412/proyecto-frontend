import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './Languageswitcher';

const Breadcrumb = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  
  // Definir los elementos usando las traducciones
  const breadcrumbItems = [
    { 
      label: t('nav.Perfil'), 
      submenu: [
        `${t('breadcrumb.options')} 1`, 
        `${t('breadcrumb.options')} 2`
      ] 
    },
    { 
      label: t('nav.Empresa'), 
      submenu: [
        `${t('breadcrumb.options')} 1`, 
        `${t('breadcrumb.options')} 2`
      ] 
    },
    { 
      label: t('nav.Lineamiento'), 
      submenu: [
        `${t('breadcrumb.options')} 1`, 
        `${t('breadcrumb.options')} 2`
      ] 
    }
  ];

  const toggleMenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  // Función para cerrar el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isClickInside = document.querySelector('.relative')?.contains(target);

      if (!isClickInside) {
        setOpenIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex gap-2 items-center text-sm font-semibold relative z-10">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="relative">
          <div
            onClick={() => toggleMenu(index)}
            className={`flex items-center gap-1 cursor-pointer p-1 rounded-md ${
              openIndex === index ? 'bg-blue-100 text-blue-600 font-bold': 'text-white font-bold hover:bg-blue-500'
            }`}>
            <span>{item.label}</span>
            <ChevronRight className={`h-3 w-3 transform transition-transform duration-200 ${
              openIndex === index ? 'rotate-90' : 'rotate-0'}`}/>
          </div>
          {openIndex === index && (
            <div className="absolute left-0 mt-1 bg-white border shadow-md rounded-md text-blue-500 text-sm w-32 z-50">
              {item.submenu.map((option, i) => (
                <div
                  key={i}
                  className="p-2 hover:bg-blue-100 hover:rounded cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="ml-auto">
        <LanguageSwitcher />
      </div>
            
    </nav>
  );
};

export default Breadcrumb;