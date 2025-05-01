import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Controlrenderer from '../components/Controlrenderer';



export default function Auditory() {
  const [selectedControl, setSelectedControl] = useState<string>("");
  
    const seccionATitle = ('controlTexts.seccionA.title');
    return (
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <Navbar />
  
        {/* Contenedor Principal (Sidebar + Content) */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar onSelect={setSelectedControl} />
  
          {/* Contenido Principal */}
          <div className="flex-1 overflow-y-auto">
            <Controlrenderer controlId={selectedControl} />
          </div>
        </div>
      </div>
    );
  }
  
  export { Auditory };