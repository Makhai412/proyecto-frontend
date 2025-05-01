import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import translations from '../../public/locales/es/translation.json';

const Breadcrumb = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  // Obtener traducciones del archivo JSON
  const { nav, breadcrumb } = translations;
  
  // Crear elementos del breadcrumb usando las traducciones
  const breadcrumbItems = [
    { 
      label: nav.Perfil, 
      submenu: [
        `${breadcrumb.options} 1`, 
        `${breadcrumb.options} 2`
      ] 
    },
    { 
      label: nav.Empresa, 
      submenu: [
        `${breadcrumb.options} 1`, 
        `${breadcrumb.options} 2`
      ] 
    },
    { 
      label: nav.Lineamiento, 
      submenu: [
        `${breadcrumb.options} 1`, 
        `${breadcrumb.options} 2`
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
    </nav>
  );
};

export default Breadcrumb;