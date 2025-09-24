import { useState } from "react";
import NavBar from "../NavBar";

function CrearNivel() {
  const [nivel, setNivel] = useState({
    nombre: "",
    descripcion: "",
    dificultad: "",
  });

  async function crearNivel(e) {
    e.preventDefault();
    await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
      },
      body: JSON.stringify({
        nombre: nivel.nombre,
        descripcion: nivel.descripcion,
        dificultad: nivel.dificultad,
      }),
    });
  }

  return (
    <div className="crearNivel">
        <NavBar />
      <h1>Crear Nivel</h1>
      <form action="" onSubmit={crearNivel}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={nivel.nombre}
          onChange={(e) => setNivel({ ...nivel, nombre: e.target.value })}
        />
        <label htmlFor="descripcion">Descripcion</label>
        <input
          type="text"
          name="descripcion"
          value={nivel.descripcion}
          onChange={(e) => setNivel({ ...nivel, descripcion: e.target.value })}
        />
        <label htmlFor="dificultad">Dificultad</label>
        <input
          type="text"
          name="dificultad"
          value={nivel.dificultad}
          onChange={(e) => setNivel({ ...nivel, dificultad: e.target.value })}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CrearNivel;
