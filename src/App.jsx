import { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    peliculaFavorita: "",
    animalFavorito: "",
  });

  const [error, setError] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usuario.nombre.length < 3 || usuario.nombre.trim() !== usuario.nombre) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (usuario.peliculaFavorita.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (usuario.animalFavorito.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    const nuevoMensaje = `Hola ${usuario.nombre}, sabemos que tu animal favorito es ${usuario.animalFavorito} y tu pelicula favorita es ${usuario.peliculaFavorita} que buenos gustos tienes.`;
    setMensaje(nuevoMensaje);

    setError(null);
  };

  return (
    <div>
      <Card />
      <h1>Queremos saber alguno de tus gustos</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          onChange={(event) =>
            setUsuario({ ...usuario, nombre: event.target.value })
          }
        />
        <label>Animal Favorito: </label>
        <input
          type="text"
          onChange={(event) =>
            setUsuario({ ...usuario, animalFavorito: event.target.value })
          }
        />
        <label>Pelicula Favorita: </label>
        <input
          type="text"
          onChange={(event) =>
            setUsuario({ ...usuario, peliculaFavorita: event.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {mensaje && <Card mensaje={mensaje} />}
    </div>
  );
}

export default App;
