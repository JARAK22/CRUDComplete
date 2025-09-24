import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">           
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/enemigos">Enemigos</Link>
        </li>
        <li>
            <Link to="/crear-enemigo">Crear Enemigo</Link>
        </li>
        <li>
            <Link to="/nivel">Nivel</Link>
        </li>
        <li>
            <Link to="/crear-nivel">Crear Nivel</Link>
        </li>
        <li>
            <Link to="/nivel-enemigo">NivelEnemigo</Link>
        </li>
        <li>
            <Link to="/crear-nivel-enemigo">Crear NivelEnemigo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;