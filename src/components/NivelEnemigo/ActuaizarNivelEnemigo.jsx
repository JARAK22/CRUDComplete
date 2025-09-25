import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

function ActuaizarNivelEnemigo() {
  const [idNivel, setIdNivel] = useState("");
  const [idEnemigo, setIdEnemigo] = useState("");
  const [cantidad, setCantidad] = useState("");

  const { id } = useParams();

  useEffect(() => {
    llamarDatos();
  }, []);

  async function llamarDatos() {
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo?id=eq.${id}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const nivelEnemigo = data[0];
        setIdNivel(nivelEnemigo.id_nivel);
        setIdEnemigo(nivelEnemigo.id_enemigo);
        setCantidad(nivelEnemigo.cantidad);
      });
  }

  async function actuaizar(e) {
    e.preventDefault();
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo?id=eq.${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        },
        body: JSON.stringify({
          id_nivel: idNivel,
          id_enemigo: idEnemigo,
          cantidad: cantidad,
        }),
      }
    ).then((res) => res.json());
  }

  return (
    <div className="actuaizarNivelEnemigo">
      <NavBar />
      <h1>Actuaizar NivelEnemigo</h1>
      <form action="" onSubmit={actuaizar}>
        <label htmlFor="id_nivel">Id Nivel</label>
        <input
          type="text"
          id="id_nivel"
          name="id_nivel"
          value={idNivel}
          onChange={(e) => setIdNivel(e.target.value)}
        />
        <label htmlFor="id_enemigo">Id Enemigo</label>
        <input
          type="text"
          id="id_enemigo"
          name="id_enemigo"
          value={idEnemigo}
          onChange={(e) => setIdEnemigo(e.target.value)}
        />
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="text"
          id="cantidad"
          name="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <button type="submit">Actuaizar</button>
      </form>
    </div>
  );
}

export default ActuaizarNivelEnemigo;
