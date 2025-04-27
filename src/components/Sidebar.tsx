import { useState } from "react";
import { sidebarConfig } from "../data/sidebarConfig";
import { ChevronRight } from "lucide-react";

type SidebarProps = {
  onSelect: (id: string) => void;
};

export default function Sidebar({ onSelect }: SidebarProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);


  return (
    <div className="w-64 bg-opacity-50 text-white p-4 h-full border-r border-opacity-30 border-gray-300">
      {/* Iterar sobre las secciones del sidebar */}
      {sidebarConfig.map((section) => (
        <div key={section.title} className="mb-4">
          {/* Si es "Perfil de la empresa", siempre mostrar */}
         
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
                        activeItem === item.id ? 'bg-gray-200 text-blue-400 rounded' : ''
                      }`}
                    >
                      {/* Ícono de flecha que gira si el elemento está activo */}
                      <ChevronRight
                        className={`h-3 w-3 transform transition-transform duration-200 ${
                          activeItem === item.id ? 'rotate-90' : 'rotate-0'
                        }`}
                      />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
           
          
        </div>
      ))}
        {/* Botón para crear nueva evaluación */}
      <button className="mt-4 bg-blue-400 text-black py-1 px-2 rounded shadow w-full">
        Crear nueva evaluación
      </button>
    </div>
  );
}

export { Sidebar };