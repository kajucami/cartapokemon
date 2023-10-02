
import React from "react"

export default function Card({pokemon, isLoading}) {
    function getImage(){
        return pokemon.sprites[`front_default`];
     }
        return (
        <div  className="drop-shadow-2xl rounded-2xl bg-slate-100 w-[300px] ">
            <div className="flex flex-col items-center relative">
            <div className="bg-card absolute w-full rounded-t-xl h-[40%]"/>
            {isLoading ? (<div className="relative flex items-center justify-center mt-10 w-40 h-40 rounded-full bg-white">
                        <p className=" text-black font-bold animate-ping ">....</p>
                    </div>): 
                    <img src={getImage()}
                        className="relative mt-10 w-40 h-40 rounded-full hover:shadow-lg bg-white hover:scale-110 "
                        alt={'Pokemon'}
                    />}
            {isLoading ? (<div className="">
                        <p className=" text-black font-bold p-6 animate-pulse">Cargando...</p>
                    </div>) :
            <div>
                <p className=" text-gray-800 first-letter:uppercase text-lg font-bold mt-4 m-3" >{pokemon.name}
                <span className="text-gray-600 font-thin "> {pokemon.stats[0].base_stat} hp</span></p>
                <p className="text-gray-600  p-2">{pokemon.base_experience} exp</p>
            </div>}

            </div>
        
        {isLoading ? (<div className="">
                        <p className=" text-black font-thin p-6">Cargando...</p>
                    </div>) :
        <div className=" grid grid-cols-3 mb-4 p-4">
            <>
                <p className="text-black font-bold">{pokemon.stats[1].base_stat}K</p>                    
                <p className=" text-black font-thin text-sm">Ataque</p>
            </>
            <>
                <p className="text-black font-bold">{pokemon.stats[3].base_stat}K</p>
                <p className=" text-black font-thin text-sm">Ataque Especial</p>
            </>                
            <> 
                <p className="text-black font-bold">{pokemon.stats[2].base_stat}K</p>
                <p className=" text-black font-thin text-sm">Defensa</p>
            </>
        </div>}

        </div>
      )
}