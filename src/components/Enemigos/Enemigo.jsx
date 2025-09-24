import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

function Enemigo() {

    const [enemigo, setEnemigo] = useState([]);

    const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo",
      {
        headers: {
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setEnemigo(data));
  }, []);

  function editarEnemigo(id) {
    console.log(id);
    navigate(`/actualizar-enemigo/${id}`);
  }

  async function eliminarEnemigo(id) {
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo?id_enemigo=eq.${id}`,
      {
        method: "DELETE",
        headers: {
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        },
      }
    ).then(() => {
      setEnemigo((prevState) => [
        ...prevState.filter((enemigo) => enemigo.id_enemigo !== id),
      ]);
    });
  }

  return (
    <div className="enemigo">
        <NavBar />
      <h1>Enemigo</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Vida</th>
            <th>Ataque</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {enemigo.map((enemigo) => (
              <tr key={enemigo.id_enemigo}>
                <td>{enemigo.id_enemigo}</td>
                <td>{enemigo.nombre}</td>
                <td>{enemigo.tipo}</td>
                <td>{enemigo.vida}</td>
                <td>{enemigo.ataque}</td>
                <td>
                  <button className="btn-editar" onClick={() => editarEnemigo(enemigo.id_enemigo)}>Editar</button>
                  <button className="btn-eliminar" onClick={() => eliminarEnemigo(enemigo.id_enemigo)}>Eliminar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Enemigo;
