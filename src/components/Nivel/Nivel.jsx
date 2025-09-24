import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";


function Nivel(){

    const [nivel, setNivel] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
    fetch(
      "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel",
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
      .then((data) => setNivel(data));
  }, []);

  function editarNivel(id) {
    console.log(id);
    navigate(`/actualizar-nivel/${id}`);
  }

  async function eliminarNivel(id) {
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`,
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
      setNivel((prevState) => [
        ...prevState.filter((nivel) => nivel.id_nivel !== id),
      ]);
    });
  }

    return(
        <div className="nivel">
            <NavBar />
            <h1>Nivel</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Dificultad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {nivel.map((nivel) => (
                        <tr key={nivel.id_nivel}>
                            <td>{nivel.id_nivel}</td>
                            <td>{nivel.nombre}</td>
                            <td>{nivel.descripcion}</td>
                            <td>{nivel.dificultad}</td>
                            <td>
                                <button className="btn-editar" onClick={() => editarNivel(nivel.id_nivel)}>Editar</button>
                                <button className="btn-eliminar" onClick={() => eliminarNivel(nivel.id_nivel)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )   
}

export default Nivel;