import './App.css'
<<<<<<< HEAD
//import { Auditory } from './pages/Auditory'
import {Login} from './pages/Login'
=======
import { Auditory } from './pages/Auditory'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/Languageswitcher';
>>>>>>> 33d1162 (Traducción, subpreguntas resueltas y se conservan las preguntas ante el cambio de idioma)

function App() {
  const { t } = useTranslation();
  
  return (
<<<<<<< HEAD
    <>
      <Login />
    </>
=======
    <div className="app">
      <main>
        <Auditory />
      </main>
    </div>
>>>>>>> 33d1162 (Traducción, subpreguntas resueltas y se conservan las preguntas ante el cambio de idioma)
  )
}

export default App