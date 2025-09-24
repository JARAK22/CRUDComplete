import { useState } from "react";
import NavBar from "../NavBar";

function CrearNivelEnemigo() {
  const [nivelEnemigo, setNivelEnemigo] = useState({
    id_nivel: "",
    id_enemigo: "",
    cantidad: "",
  });

  async function crearNivelEnemigo(e) {
    e.preventDefault();
    await fetch(
      "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        },
        body: JSON.stringify({
          id_nivel: nivelEnemigo.id_nivel,
          id_enemigo: nivelEnemigo.id_enemigo,
          cantidad: nivelEnemigo.cantidad,
        }),
      }
    );
  }

  return (
    <div className="crearNivelEnemigo">
      <NavBar />
      <h1>Crear NivelEnemigo</h1>
      <form action="" onSubmit={crearNivelEnemigo}>
        <label htmlFor="id_nivel">Id Nivel</label>
        <input
          type="text"
          id="id_nivel"
          name="id_nivel"
          onChange={(e) =>
            setNivelEnemigo({ ...nivelEnemigo, id_nivel: e.target.value })
          }
        />
        <label htmlFor="id_enemigo">Id Enemigo</label>
        <input
          type="text"
          id="id_enemigo"
          name="id_enemigo"
          onChange={(e) =>
            setNivelEnemigo({ ...nivelEnemigo, id_enemigo: e.target.value })
          }
        />
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="text"
          id="cantidad"
          name="cantidad"
          onChange={(e) =>
            setNivelEnemigo({ ...nivelEnemigo, cantidad: e.target.value })
          }
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CrearNivelEnemigo;
