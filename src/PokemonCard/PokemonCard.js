import React, {useEffect, useState} from "react";
import axios from "axios";
import "./PokemonCard.css";

function PokemonCard({endPoint}) {
    const [cardData, setCardData] = useState("");

    useEffect(() => {
        async function fetchCard() {
            try {
                const {data} = await axios.get(endPoint)
                setCardData(data)
            } catch (e) {
                console.error(e);
            }
        }

        void fetchCard()
    }, [endPoint]);


    return (
        <>
            {cardData !== "" &&<section className="border">
                <div className={`${cardData.types[0].type.name} outline`}>
                    <div className="name-hp">
                <p className="name"><strong>{cardData.name.toUpperCase()}</strong></p> <p className="hp">HP</p><p><strong>{cardData.stats[0].base_stat}</strong></p></div>
                <img src={ cardData.sprites.front_default}
                     alt={`${cardData.name}`}
                     onMouseEnter={ e => (e.currentTarget.src = cardData.sprites.front_shiny ) }
                     onMouseOut={ e => (e.currentTarget.src = cardData.sprites.front_default)}
                />
                    <div className='underline'></div>
               <div className="textArea">
                   <div className="colorfix">
                <p>ID:{cardData.id} HT:{cardData.height}' WT:{cardData.weight} lbs</p>
                <p>{cardData.moves.length} moves</p>

                    <ul>
                        {cardData.abilities.map((ability) => {
                            return (
                                <li key={`${ability.ability.name}-${cardData.name}`}>
                                    {ability.ability.name}
                                </li>
                            )
                        })}
                    </ul>
               </div>
               </div>
            </div>
            </section>}
        </>
    );
}

export default PokemonCard;
