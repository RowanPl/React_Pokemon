import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from "./PokemonCard/PokemonCard";

function App() {
const [endPoint , setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon/')


    return (
    <div>

        <PokemonCard endpoint={endPoint}/>

    </div>
  );
}

export default App;
