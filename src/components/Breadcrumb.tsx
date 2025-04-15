import { useState, useEffect } from 'react'
import arrow from '../assets/arrow-down.png'

const breadcrumbItems = [
  { label: 'Perfil', submenu: ['Opción 1', 'Opción 2'] },
  { label: 'Empresa', submenu: ['Opción 1', 'Opción 2'] },
  { label: 'Lineamiento', submenu: ['Opción 1', 'Opción 2'] }
]

export const Breadcrumb = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleMenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  // Función para cerrar el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificar si el clic ocurrió fuera del menú desplegable
      const target = event.target as HTMLElement
      const isClickInside = document.querySelector('.relative')?.contains(target)

      if (!isClickInside) {
        setOpenIndex(null)
      }
    }

    // Agregar el event listener al montar el componente
    document.addEventListener('mousedown', handleClickOutside)

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="flex gap-2 items-center text-sm font-semibold relative z-10">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="relative">
          <div
            onClick={() => toggleMenu(index)}
            className={`flex items-center gap-1 cursor-pointer p-1 rounded-md ${
              openIndex === index ? 'bg-blue-100 text-blue-600 font-bold': 'text-black font-bold hover:bg-blue-50'
            }`}>
            <span>{item.label}</span>
            <img src={arrow} alt="Arrow" className={`h-3 w-3 transform transition-transform duration-200 ${
              openIndex === index ? 'rotate-360' : 'rotate-270'}`}/>
          </div>
          {openIndex === index && (
            <div className="absolute left-0 mt-1 bg-white border shadow-md rounded-md text-black text-sm w-32 z-50">
              {item.submenu.map((option, i) => (
                <div
                  key={i}
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb