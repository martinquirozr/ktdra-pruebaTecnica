// src/App.js
import './App.css';
import React, { createContext, useState, useEffect, useContext } from 'react';
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
      const data = await response.json();
      console.log(data);
      setCharacters(data.results || []);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setCharacters([])
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
      <h1>Rick & Morty APP</h1>
      <SearchBar onSearch={searchCharacters} />
      <div>
        <Cards />
      </div>
    </CharacterContext.Provider>
  );
}

export default App;
