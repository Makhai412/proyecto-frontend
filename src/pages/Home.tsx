import Content from "../components/Panel_home_log";
import GuestHome from "../components/Panel_home_guest"; // Asegúrate de tener este archivo
import Navbar from "../components/Navbar_home";

// Simulación de autenticación (reemplázalo con tu lógica real)
const isAuthenticated = false; // cambia a true para probar

export default function Home() {
  return (
    <div>
      <Navbar />
      {isAuthenticated ? <Content /> : <GuestHome />}
    </div>
  );
}

export { Home };
