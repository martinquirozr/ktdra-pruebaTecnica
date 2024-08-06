// src/App.js
import './App.css';
import React, { createContext, useState, useContext } from 'react';
import SearchBar from './components/searchBar.jsx/searchBar';
import Cards from './components/cards/cards';

const CharacterContext = createContext();

export const useCharacters = () => {
  return useContext(CharacterContext);
};

function App() {
  const [characters, setCharacters] = useState([]);

  // Función para Obtener los datos de la API
  const fetchCharacters = async (query = '') => {
    let API_URL = 'https://rickandmortyapi.com/api/character';
    if (query) {
      API_URL += `?name=${query}`;
    }
    
    try {
      const response = await fetch(API_URL);
  
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Comprobar si se encontraron resultados
      if (data.results && data.results.length > 0) {
        setCharacters(data.results);
      } else {
        setCharacters([{ name: 'Personaje No encontrado', status: 'Unknown', species: 'Unknown', gender: 'Unknown' }]);
      }
  
    } catch (error) {
      console.error('Error fetching characters:', error);
  
      // Si ocurre un error, establecer un personaje de error
      setCharacters([{ name: 'Error al obtener personajes', status: 'Unknown', species: 'Unknown', gender: 'Unknown' }]);
    }
  };
  

  // Función para manejar la búsqueda de personajes
  const searchCharacters = (query) => {
    // Si la consulta está vacía, traer todos los personajes
    if (query.trim() === '') {
      fetchCharacters(); // Trae todos los personajes
    } else {
      fetchCharacters(query); // Trae personajes que coinciden con la búsqueda
    }
  };

  return (
    <CharacterContext.Provider value={{ characters }}>
      <header><h1>Rick & Morthy APP</h1></header>
      <SearchBar onSearch={searchCharacters} />
      <div className='cards_container'>
        <Cards />
      </div>
      <footer>
        <p> By Martin Quiroz - 2024</p>
      </footer>
    </CharacterContext.Provider>
  );
}

export default App;
