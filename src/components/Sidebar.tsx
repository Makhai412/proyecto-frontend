import { useState } from "react";
import { ChevronRight } from "lucide-react";
import translations from '../../public/locales/es/translation.json';

type SidebarProps = {
  onSelect: (id: string) => void;
};

export default function Sidebar({ onSelect }: SidebarProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { sidebar } = translations;

  // Definimos los elementos usando las traducciones del JSON
  const sidebarItems = [
    { id: "seccionA", label: sidebar.Profundizando },
    { id: "seccionB", label: sidebar.Contexto },
    { id: "seccionC", label: sidebar.Liderazgo },
    { id: "seccionD", label: sidebar.Planificación },
    { id: "seccionE", label: sidebar.Soporte },
    { id: "seccionF", label: sidebar.Operación },
    { id: "seccionG", label: sidebar.Evaluación },
    { id: "seccionH", label: sidebar.Mejora },
    { id: "seccionI", label: sidebar.Controles }
  ];

  return (
    <div className="w-64 bg-opacity-50 text-white p-4 h-full border-r border-opacity-30 border-gray-300">
      {/* Iterar sobre las secciones del sidebar */}
      {sidebarItems.map((item, index) => (
        <div key={index} className="mb-4">
          <ul className="ml-4 mt-2">
            <li key={index}>
              <button
                onClick={() => {
                  onSelect(item.id);
                  setActiveItem(item.label); // Actualizar el elemento activo
                }}
                className={`text-left w-full hover:underline flex items-center gap-2 ${
                  activeItem === item.label ? 'bg-gray-200 text-blue-400 rounded' : ''
                }`}
              >
                {/* Ícono de flecha que gira si el elemento está activo */}
                <ChevronRight
                  className={`h-3 w-3 transform transition-transform duration-200 ${
                    activeItem === item.label ? 'rotate-90' : 'rotate-0'
                  }`}
                />
                {item.label}
              </button>
            </li>
          </ul>
        </div>
      ))}
      {/* Botón para crear nueva evaluación */}
      <button className="mt-4 bg-blue-400 text-black py-1 px-2 rounded shadow w-full">
        {sidebar.Crear}
      </button>
    </div>
  );
}

export { Sidebar };