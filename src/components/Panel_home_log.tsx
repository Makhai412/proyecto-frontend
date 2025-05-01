import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <div className="flex justify-center items-start min-h-screen pt-24 font-sans">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md flex flex-col items-center font-sans">
        
        <h1 className="text-2xl font-bold text-blue-700 mb-2 text-center">
          BIENVENIDO DE NUEVO A LA PLATAFORMA DE AUDITORÍA       
        </h1>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full pt-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center min-h-[120px]">
            <p className="text-8xl font-bold text-blue-600">4</p>
            <p className="text-2xl text-gray-600">Auditorías Activas</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center min-h-[120px]">
            <p className="text-8xl font-bold text-yellow-600">2</p>
            <p className="text-2xl text-gray-600">Pendientes por Aprobar</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center min-h-[120px]">
            <p className="text-8xl font-bold text-green-600">1</p>
            <p className="text-2xl text-gray-600">Programadas este Mes</p>
          </div>
        </div>
        
        <p className="text-gray-600 text-center mb-6">
          Gestiona, revisa y controla auditorías internas de manera eficiente.
        </p>


        {/* Botones de acción rápida */}
        <div className="flex gap-4 mb-6">
          <Link to="/auditory" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Nueva Auditoría
          </Link>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
            Ver Auditorías
          </button>
        </div>

        {/* Tarjetas resumen */}
      </div>
    </div>
  );
};

export default Content;
