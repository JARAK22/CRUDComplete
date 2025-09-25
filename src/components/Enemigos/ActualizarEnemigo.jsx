import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

function ActualizarEnemigo() {
  const [vida, setVida] = useState(0);
  const { id } = useParams();

  async function actualizar(e) {
    e.preventDefault();
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo?id_enemigo=eq.${id}`,
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
            vida: vida,
        }),
      }
    ).then((res) => res.json());
  }

  useEffect(() => {
    llamarDatos();
  }, []);

  async function llamarDatos() {
    const res = await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo?id_enemigo=eq.${id}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:            
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        },
      }
    );

    const data = await res.json();
    if (data.length > 0) {
      setVida(data[0].vida);
    }
  }

  return (
    <div className="actualizarEnemigo">
        <NavBar />
      <h1>Actualizar Enemigo</h1>
      <form action="" onSubmit={actualizar}>
        <label htmlFor="vida">Vida</label>
        <input
          type="text"
          id="vida"
          name="vida"
          value={vida}
          onChange={(e) => setVida(e.target.value)}
        />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ActualizarEnemigo;
