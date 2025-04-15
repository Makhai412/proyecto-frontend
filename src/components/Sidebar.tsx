import { useState } from "react";
import { sidebarConfig } from "../data/sidebarConfig";
import arrow from '../assets/arrow-down.png';

type SidebarProps = {
  onSelect: (id: string) => void;
};

export default function Sidebar({ onSelect }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="w-64 bg-opacity-50 text-white p-4 h-screen border-r border-opacity-30 border-gray-300">
      {/* Iterar sobre las secciones del sidebar */}
      {sidebarConfig.map((section) => (
        <div key={section.title} className="mb-4">
          {/* Si es "Perfil de la empresa", siempre mostrar */}
          {section.title === "Perfil de la empresa" ? (
            <>
              <div className="font-bold">{section.title}</div>
              <ul className="ml-4 mt-2">
                {section.items.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onSelect(item.id);
                        setActiveItem(item.id); // Actualizar el elemento activo
                      }}
                      className={`text-left w-full hover:underline flex items-center gap-2 ${
                        activeItem === item.id ? 'bg-gray-500 text-yellow-400' : ''
                      }`}
                    >
                      {/* Ícono de flecha que gira si el elemento está activo */}
                      <img
                        src={arrow}
                        alt="Arrow"
                        className={`h-3 w-3 transform transition-transform duration-200 ${
                          activeItem === item.id ? 'rotate-360' : 'rotate-270'
                        }`}
                      />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            // Para otras secciones, mantener el comportamiento de expandir/colapsar
            <>
              {/* Botón para expandir/colapsar la sección */}
              <button
                onClick={() => {
                  toggleSection(section.title);
                  setActiveSection(section.title); // Actualizar la sección activa
                }}
                className={`w-full text-left font-bold flex items-center gap-2 ${
                  activeSection === section.title ? 'bg-gray-500 text-yellow-400' : ''
                }`}
              >
                {/* Flecha que gira según si la sección está expandida */}
                <img
                  src={arrow}
                  alt="Arrow"
                  className={`h-3 w-3 transform transition-transform duration-200 ${
                    openSections.includes(section.title) ? 'rotate-0' : 'rotate-90'
                  }`}
                />
                {section.title}
              </button>

              {/* Mostrar elementos de la sección si está expandida */}
              {openSections.includes(section.title) && (
                <ul className="ml-4 mt-2">
                  {section.items.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          onSelect(item.id);
                          setActiveItem(item.id); // Actualizar el elemento activo
                        }}
                        className={`text-left w-full hover:underline flex items-center gap-2 ${
                          activeItem === item.id ? 'bg-gray-500 text-yellow-400' : ''
                        }`}
                      >
                        {/* Ícono de flecha que gira si el elemento está activo */}
                        <img src={arrow} alt="Arrow" className={`h-3 w-3 transform transition-transform duration-200 ${
                            activeItem === item.id ? 'rotate-0' : 'rotate-90'
                          }`}
                        />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      ))}

      {/* Botón para crear nueva evaluación */}
      <button className="mt-4 bg-yellow-400 text-black py-1 px-2 rounded shadow w-full">
        Crear nueva evaluación
      </button>
    </div>
  );
}

export { Sidebar };