import React, { useEffect, useState } from "react"
import './App.css'
import Card from "./components/carta/Carta"
//import axios from "axios"



function App() {


  const [pokemon, setPokemon] = useState()
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/22")

  function getPokemon(){
    const random = Math.random() * 1000
    setUrl(`https://pokeapi.co/api/v2/pokemon/${random}`)
  }
  useEffect(() => {

    /**const getPokemonData = async () => {

    const url = ("https://pokeapi.co/api/v2/pokemon/22");
    const result = await axios.get(url);
    const data = await result.json()
    setPokemon(result.data)
    }*/

    const getPokemonData = async() => {
        const reponse = await fetch(url);
        const data = await reponse.json()
        setPokemon(data )
      }
    getPokemonData()
  }, [url]);
  

  return (
    <>
      {pokemon && <Card pokemon = {pokemon}/>}
      <button className="bg-blue-200 mt-3 p-4 text-blue-950 drop-shadow-md font-bold hover:scale-110" 
        onClick={getPokemon}
        >Cargar Nuevo Pokemon
      </button>
    </>
  )
}

export default App
