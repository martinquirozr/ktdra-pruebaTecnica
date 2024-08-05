// src/components/cards/cards.jsx
import React from 'react';
import { useCharacters } from '../../App';

function Cards() {
  const { characters } = useCharacters();
  console.log ('Characters en Cards',characters)

  return (
    <div className="cards">
      {characters.map((character) => (
        <div key={character.id} className="card">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}


function Card (){

    return(
        <div>

            
        </div>
    )

}






export default Cards;
