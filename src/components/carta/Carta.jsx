import React from "react"; // con vite no es necessario importar react ya que lo hace vite por detras

export default function Card({ pokemon }) {
    function getImage() {
        const src = pokemon.sprites[`front_default`];
        return src; // Un poco innecesario crear la constante, piendolo devolverlo en la misma linea
    }

    return (
        <div className=" w-80 h-100 bg-white rounded-xl drop-shadow-xl ">
            <div className="flex flex-col items-center rounded-xl ">
                {/* para colocar el fondo bien, tienes que ponerlo absoluto en relacion al div padre 
                y asi podras superponer la imagen del pokemon */}
                <div className="bg-card  w-full rounded-t-xl h-22">
                    <img
                        src={getImage()}
                        /* aqui sobran muchismas clases, fijate que h-50 es una clase de tailwind que ni exite, deberian
                        ser width y height iguales o solo poner el height valdria el margin-left es una manera muy pobre de centrar algo, 
                        si decides hacer mas grande la card ya no estaria centrado, prueba aprovechando el items-center delpadre y sacando
                        el img del div del bg.
                        Tambien es recomendable si poner un efecto en hover, darle una clases de trasicion tipo transition-all para hacerlo mas 
                        agradable para el usuario. */
                        className="-z-4 ml-20 mt-10 w-40 h-50 rounded-full hover:shadow-lg bg-white hover:scale-110 "
                        alt={`Pokemon`}
                    />
                </div>
                <div className="pb-10">
                    {/* creo que se quires separa algo es mejor utilizar margin ya que padding deja el div asimetrico. */}
                    <p className="text-gray-800 first-letter:uppercase text-lg font-bold mt-4">
                        {pokemon.name}
                        <span className="text-gray-600 font-thin ">
                            {" "}
                            {pokemon.stats[0].base_stat} hp
                        </span>
                    </p>
                    <p className="text-gray-600 mt-3">
                        {pokemon.base_experience} exp
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 p-3">
                {/* Por que poner relative? */}
                <div className="relative ">
                    <p className="text-black font-bold">
                        {pokemon.stats[1].base_stat}K
                    </p>
                    <p className=" text-black font-thin text-sm">Ataque</p>
                </div>
                {/* Por que poner relative? */}
                <div className="relative ">
                    <p className="text-black font-bold">
                        {pokemon.stats[3].base_stat}K
                    </p>
                    <p className=" text-black font-thin text-sm">
                        Ataque Especial
                    </p>
                </div>{" "}
                <div className=" relative ">
                    <p className="text-black font-bold">
                        {pokemon.stats[2].base_stat}K
                    </p>
                    <p className=" text-black font-thin text-sm">Defensa</p>
                </div>
            </div>
        </div>
    );
}
