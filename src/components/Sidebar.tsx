import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

type SidebarProps = {
  onSelect: (id: string) => void;
};

export default function Sidebar({ onSelect }: SidebarProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { t } = useTranslation();

  // Sección del Sidebar con las claves para la traducción
  const sidebarItems = [
    { id: "seccionA", label: t('sidebar.Profundizando') },
    { id: "seccionB", label: t('sidebar.Contexto') },
    { id: "seccionC", label: t('sidebar.Liderazgo') },
    { id: "seccionD", label: t('sidebar.Planificación') },
    { id: "seccionE", label: t('sidebar.Soporte') },
    { id: "seccionF", label: t('sidebar.Operación') },
    { id: "seccionG", label: t('sidebar.Evaluación') },
    { id: "seccionH", label: t('sidebar.Mejora') },
    { id: "seccionI", label: t('sidebar.Controles') }
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
        {t('sidebar.Crear')}
      </button>
    </div>
  );
}

export { Sidebar };
