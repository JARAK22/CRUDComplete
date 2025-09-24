import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

function NivelEnemigo() {
    const [nivelEnemigo, setNivelEnemigo] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo",
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
            .then((data) => setNivelEnemigo(data));
    }, []);

    function editarNivelEnemigo(id) {
        console.log(id);
        navigate(`/actuaizar-nivel-enemigo/${id}`);
    }

    async function eliminarNivelEnemigo(id) {
        await fetch(
            `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo?id=eq.${id}`,
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
            setNivelEnemigo((prevState) => [
                ...prevState.filter((nivelEnemigo) => nivelEnemigo.id !== id),
            ]);
        });
    }

    return (
        <div className="nivelEnemigo">
            <NavBar />
            <h1>NivelEnemigo</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id_nivel</th>
                        <th>Id_enemigo</th>
                        <th>cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {nivelEnemigo.map((nivelEnemigo) => (
                        <tr key={nivelEnemigo.id}>
                            <td>{nivelEnemigo.id_nivel}</td>
                            <td>{nivelEnemigo.id_enemigo}</td>
                            <td>{nivelEnemigo.cantidad}</td>
                            <td>
                                <button className="btn-editar" onClick={() => editarNivelEnemigo(nivelEnemigo.id)}>Editar</button>
                                <button className="btn-eliminar" onClick={() => eliminarNivelEnemigo(nivelEnemigo.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NivelEnemigo;