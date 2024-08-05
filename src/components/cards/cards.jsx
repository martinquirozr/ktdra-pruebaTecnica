// src/components/cards/cards.jsx
import React,{useState} from 'react';
import { useCharacters } from '../../App';
import './cards.css'



function Cards() {
  const { characters } = useCharacters();
  console.log ('Characters en Cards',characters)

  return (
    <div className="cards">
      {characters.map((character) => (
        <Card key={character.id} character ={character}></Card>
      ))}
    </div>
  );
}


function Card ({character}){
    const [plusMode,setPlusMode]= useState(false)

    return(

        <div className='card_containerPlus'>

            {plusMode ? (


                    // TRUEE
                // Empieza Card Plus Mode
        <div className='card_plus'>

        <div className='card_containerInfo'>
            <h3>{character.name}</h3>
            <div className='card_containerInfo-plus'>
                <div>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    
                </div>
                <div>
                    <p>Origin: {character.origin.name}</p>
                    <p>Location: {character.location.name}</p>
                    <p>Episodes: {character.episode.length}</p>

                </div>
            </div>
            
            <div className='card_btnContainer'>
                <button onClick={()=> setPlusMode(false)} className='card_button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                </svg>
                </button>
                <button className='card_button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    //Termina Card Plus Mode

                ) : (
                    // FALSE
                    // Empieza Card Normal
        <div className='card'>
        <div className='card_containerImg'>
            <img className='card_img' src={character.image} alt={character.name}></img>
        </div>
        <div className='card_containerInfo'>
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <div className='card_btnContainer'>
                <button onClick={()=> setPlusMode(true)} className='card_button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </button>
                <button className='card_button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    //Termina Card Normal



     ) }
         </div>
         

    )

}












export default Cards;
