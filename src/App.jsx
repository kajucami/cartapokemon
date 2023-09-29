import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/carta/Carta";
//import axios from "axios"

function App() {
    const [pokemon, setPokemon] = useState(); // mejor inicializar el estado a null que dejarlo vacio.
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/22");
    // Si utilizar la url como el estado para no repetir el codigo y tener la url centralizada porque no creas una variable
    // fuera del compoennte con la BASE_URL y despues le añades el numero,
    // tambien otra opcion es solo controlando el estado del random

    function getPokemon() {
        const random = Math.floor(Math.random() * 1000);
        setUrl(`https://pokeapi.co/api/v2/pokemon/${random}`);
    }
    useEffect(() => {
        /* Podrias añadir como tarea extra añadir un estaso de loading para que se muestre feedback enlos campos 
      y en la imagen como que esta cargando la imagen. */
        const getPokemonData = async () => {
            const reponse = await fetch(url); // te comiste una s, en una entrega mejor no arrastrar errores de estos si se puede.
            const data = await reponse.json();
            setPokemon(data);
        };

        /**const getPokemonData = async () => {
    const url = ("https://pokeapi.co/api/v2/pokemon/22");
    const result = await axios.get(url);
    const data = await result.json()
    setPokemon(result.data)
    }*/

        getPokemonData();
    }, [url]);

    return (
        <>
            {pokemon && <Card pokemon={pokemon} />}
            <button
                className="bg-blue-200 mt-3 p-4 text-blue-950 drop-shadow-md font-bold hover:scale-110"
                onClick={getPokemon}
            >
                Cargar Nuevo Pokemon
            </button>
        </>
    );
}

export default App;
