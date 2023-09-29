
import React from "react"

export default function Card({pokemon}) {


    function getImage(){
        const src = pokemon.sprites[`front_default`];
        return src
     }

        return (
        <div  className=" w-80 h-100 bg-white rounded-xl drop-shadow-xl ">
            <div className="flex flex-col items-center rounded-xl ">
                <div className="bg-card  w-full rounded-t-xl h-22">
                <img src= {getImage()} className="-z-4 ml-20 mt-10 w-40 h-50 rounded-full hover:shadow-lg bg-white hover:scale-110 " alt={`Pokemon`}
                />
            </div>
            <div className="pb-10">
                <p className="text-gray-800 first-letter:uppercase text-lg font-bold mt-4" >{pokemon.name}
                <span className="text-gray-600 font-thin "> {pokemon.stats[0].base_stat} hp</span></p>
                <p className="text-gray-600 mt-3">{pokemon.base_experience} exp</p>
            </div>
            
        </div>

        <div className="grid grid-cols-3 gap-3 p-3">
            <div className="relative ">
                <p className="text-black font-bold">{pokemon.stats[1].base_stat}K</p>                    
                <p className=" text-black font-thin text-sm">Ataque</p>
            </div>
            <div className="relative ">
                <p className="text-black font-bold">{pokemon.stats[3].base_stat}K</p>
                <p className=" text-black font-thin text-sm">Ataque Especial</p>
            </div>                <div className=" relative ">
                <p className="text-black font-bold">{pokemon.stats[2].base_stat}K</p>
                <p className=" text-black font-thin text-sm">Defensa</p>
            </div>
        </div>
        </div>
      )
}