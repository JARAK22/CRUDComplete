import { useState } from "react";
import NavBar from "../NavBar";

function CrearEnemigo() {

    const [enemigo, setEnemigo] = useState({
        nombre: '',
        tipo: '',
        vida: 0,
        ataque: 0
    })

  async function crearEnemigo(e) {
    e.preventDefault();
    await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
      },
      body: JSON.stringify({
        nombre: enemigo.nombre,
        tipo: enemigo.tipo,
        vida: enemigo.vida,
        ataque: enemigo.ataque,
      }),
    });
  }

  return (
    <div className="crearEnemigo">
        <NavBar />
      <h1>Crear Enemigo</h1>
      <form action="" onSubmit={crearEnemigo}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={enemigo.nombre}
          onChange={(e) => setEnemigo({ ...enemigo, nombre: e.target.value })}
        />
        <label htmlFor="tipo">Tipo</label>
        <input
          type="text"
          name="tipo"
          value={enemigo.tipo}
          onChange={(e) => setEnemigo({ ...enemigo, tipo: e.target.value })}
        />
        <label htmlFor="vida">Vida</label>
        <input
          type="text"
          name="vida"
          value={enemigo.vida}
          onChange={(e) => setEnemigo({ ...enemigo, vida: e.target.value })}
        />
        <label htmlFor="ataque">Ataque</label>
        <input
          type="text"
          name="ataque"
          value={enemigo.ataque}
          onChange={(e) => setEnemigo({ ...enemigo, ataque: e.target.value })}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CrearEnemigo;
