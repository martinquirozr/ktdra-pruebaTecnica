import './App.css'
import React,{createContext,useState,useEffect,useContext} from 'react';
import SearchBar from './components/searchBar.jsx/searchBar'
import Cards from './components/cards/cards'



const CharacterContext = createContext();

export const useCharacters = ()=>{
  return useContext(CharacterContext)
}



function App() {
 const [characters,setCharacters] = useState([]);

// Función para Obtener los datos de la API
const fetchCharacters = async () => {
  const API_URL = 'https://rickandmortyapi.com/api/character';
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setCharacters(data.results)
  } catch (error) {
    console.error('Error fetching characters:', error);
    return []; // 
  }
};

useEffect(()=>{
  fetchCharacters()
},[]);

  return (
    <CharacterContext.Provider value={{ characters }}>
    <h1>Rick & Morty APP</h1>
    <SearchBar />
    <Cards />
  </CharacterContext.Provider>
  )
}

export default App
