import React, {useEffect, useState} from "react";
import axios from "axios";

function PokemonCard(endPoint) {
    const [cardData, setCardData] = useState("");

    useEffect(() => {
        async function fetchCard() {
            try {
                const response = await axios.get({endPoint}.toString())
                setCardData(response.data)
            } catch (e) {
                console.error(e);
            }
        }

        void fetchCard()
    }, []);


    return (
        <>
            {cardData !== "" && <div>
                <p><strong>{cardData.name.toUpperCase()}</strong></p> <p>HP<strong>{cardData.stats[0].base_stat}</strong></p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cardData.id}.png`}
                     alt={`"Normal ${cardData.name}"`}
                     onMouseEnter={ e => (e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${cardData.id}.png` ) }
                     onMouseOut={ e => (e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cardData.id}.png`)}
                />
                <p>ID:{cardData.id} HT:{cardData.height}' WT:{cardData.weight} lbs</p>
                <p>{cardData.moves.length} moves</p>
                <div>
                    <h3>Abilities:</h3>
                    <p>{cardData.abilities[0].ability.name}</p>
                    <p>{cardData.abilities[1].ability.name}</p>
                    {(cardData.abilities[2]) !== undefined && <p>{cardData.abilities[2].ability.name}</p>}
                </div>
            </div>}

        </>
    );
}

export default PokemonCard;
