import { useState } from "react";
import logo from '../assets/C&C logo2.png'; // Opcional: tu logo si tienes uno

export default function PanelLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }
    // Aquí podrías hacer la llamada a la API de login
    console.log('Email:', email, 'Password:', password);
    setError('');
  };

  return (
    <div className="flex min-h-screen">
      {/* Lado Izquierdo */}
      <div>
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {logo && (
            <img src={logo} alt="Logo" className="h-30 w-50 mb-4" />
          )}
        </div>

      </div>

      {/* Lado Derecho - Formulario */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email de la compañía
            </label>
            <input
              id="email"
              type="email"
              placeholder="Ej: acmeSA@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-1">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            Iniciar sesión
          </button>

          <p className="text-center text-sm text-gray-600">
            ¿No tienes cuenta?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export { PanelLogin };