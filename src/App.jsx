import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/carta/Carta";


const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
function App() {
    
    const [pokemon, setPokemon] = useState(null); 
    const [url, setUrl] = useState(`${BASE_URL}${Math.floor(Math.random() * 1000)}`)
    const [isLoading, setIsLoading] = useState(false)

    function getPokemon() {
        const random = Math.floor(Math.random() * 1000)
    setUrl(`${BASE_URL}${random}`)
    }
    useEffect(() => {
        setIsLoading(true);
        const getPokemonData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setPokemon(data);
        };
        getPokemonData();
       
        setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        //setIsLoading(false)

          
    }, [url]);

    //console.log(isLoading)

    return (
        <>
            {pokemon && <Card pokemon={pokemon} isLoading={isLoading} />}
            <button
                className="  sticky  bg-blue-200 mt-2 p-4 text-blue-950 drop-shadow-md font-bold hover:scale-110"
                onClick={getPokemon}
            >Cargar Nuevo Pokemon
            </button>
        </>
    );
}

export default App;
