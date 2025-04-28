import './App.css'
import { Auditory } from './pages/Auditory'
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  
  return (
    <div className="app">
      <main>
        <Auditory />
      </main>
    </div>
  )
}

export default App