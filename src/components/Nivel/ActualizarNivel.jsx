import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

function ActualizarNivel() {
    const [nivel, setNivel] = useState({
        nombre: '',
        descripcion: '',
        dificultad: ''
    });
    const { id } = useParams();

    async function actualizar(e) {
        e.preventDefault();
        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`, {
            method: "PATCH",
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
        }).then((res) => res.json());
    }
    return (
        <div className="actualizarNivel">
            <NavBar />
            <h1>Actualizar Nivel</h1>
            <form action="" onSubmit={actualizar}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    onChange={(e) => setNivel({ ...nivel, nombre: e.target.value })}
                />
                <label htmlFor="descripcion">Descripcion</label>
                <input
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    onChange={(e) => setNivel({ ...nivel, descripcion: e.target.value })}
                />
                <label htmlFor="dificultad">Dificultad</label>
                <input
                    type="text"
                    id="dificultad"
                    name="dificultad"
                    onChange={(e) => setNivel({ ...nivel, dificultad: e.target.value })}
                />
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
}

export default ActualizarNivel;