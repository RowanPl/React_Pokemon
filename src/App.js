//import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from "./PokemonCard/PokemonCard";
import {useEffect, useState} from "react";
import axios from "axios";
import pokemonLogo from "./assets/Daco_5394286.png"

function App() {
const [endPoint , setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [pokemons, setPokemons] = useState('')


    useEffect(() => {
        async function fetchData() {
            try {
                const {data} = await axios.get(endPoint);
                setPokemons(data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [endPoint]);

    return (
    <div className='display'>
        <img className="pokemonLogo" src={pokemonLogo} alt="Pokemon logo" onClick={() => setEndPoint('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')}/>
        <section className="buttons">
        <div className="pokeball-top-half">
            <div className="pokeball-bottom-half">
                <button
                    className="pokeball-button"
                    disabled={!pokemons.previous}
                    onClick={() => setEndPoint(pokemons.previous)}>Previous</button>
        </div>
            </div>
            <div className="pokeball-top-half">
                <div className="pokeball-bottom-half">
                    <button
                        className="pokeball-button"
                        disabled={!pokemons.next}
                        onClick={() => setEndPoint(pokemons.next)}>Next</button>

                </div>
            </div>
        </section>


            <div className='Cards'>
            {pokemons.results && pokemons.results.map((pokemon) => {
                return <PokemonCard key={pokemon.name} endPoint={pokemon.url} />
            })}
            </div>
    </div>
  );
}

export default App;
