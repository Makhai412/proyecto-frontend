import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="app">
      <main>
        <AppRoutes />  {/* Deja que el router decida qué mostrar */}
      </main>
    </div>
  )
}

export default App