import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enemigo from "./components/Enemigos/Enemigo";
import Home from "./components/Home";
import CrearEnemigo from "./components/Enemigos/CrearEnemigo";
import ActualizarEnemigo from "./components/Enemigos/ActualizarEnemigo";
import CrearNivel from "./components/Nivel/CrearNivel";
import ActualizarNivel from "./components/Nivel/ActualizarNivel";
import NivelEnemigo from "./components/NivelEnemigo/NivelEnemigo";
import CrearNivelEnemigo from "./components/NivelEnemigo/CrearNivelEnemigo";
import ActuaizarNivelEnemigo from "./components/NivelEnemigo/ActuaizarNivelEnemigo";
import Nivel from "./components/Nivel/Nivel";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enemigos" element={<Enemigo />} />
          <Route path="/crear-enemigo" element={<CrearEnemigo />} />
          <Route path="/actualizar-enemigo/:id" element={<ActualizarEnemigo />} />
          <Route path="/nivel" element={<Nivel />} />
          <Route path="/crear-nivel" element={<CrearNivel />} />
          <Route path="/actualizar-nivel/:id" element={<ActualizarNivel />} />
          <Route path="/nivel-enemigo" element={<NivelEnemigo />} />
          <Route path="/crear-nivel-enemigo" element={<CrearNivelEnemigo />} />
          <Route path="/actuaizar-nivel-enemigo/:id" element={<ActuaizarNivelEnemigo />} />
        </Routes>
      </Router>
    </div>
  );
} 

export default App;