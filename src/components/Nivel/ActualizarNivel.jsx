import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

function ActualizarNivel() {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [dificultad, setDificultad] = useState("");

  const { id } = useParams();

  useEffect(() => {
    llamarDatos();
  }, []);

  /*async function llamarDatos() {
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`,
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
        setDatos(data);
        const nivelito = data[0];
        alert(nivelito);
      });
  }*/

  async function actualizar(e) {
    e.preventDefault();
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`,
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
            nombre: nombre,
            descripcion: descripcion,
            dificultad: dificultad,
        }),
      }
    ).then((res) => res.json());
  }

  async function llamarDatos() {
    const res = await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`,
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
      setNombre(data[0].nombre);
      setDescripcion(data[0].descripcion);
      setDificultad(data[0].dificultad);
    }
  }

  return (
    <div className="actualizarNivel">
      <NavBar />
      <h1>Actualizar Nivel</h1>
      <form onSubmit={actualizar}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <label htmlFor="descripcion">Descripcion:</label>
        <input
          type="text"
          placeholder="Descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></input>
        <label htmlFor="dificultad">Dificultad:</label>
        <input
          type="text"
          placeholder="Dificultad"
          value={dificultad}
          onChange={(e) => setDificultad(e.target.value)}
        ></input>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ActualizarNivel;
