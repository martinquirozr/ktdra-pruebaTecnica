// src/components/searchBar.jsx/searchBar.js
import './searchBar.css';
import React, { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  // Se ejecuta cada vez que 'query' cambia
  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      onSearch(query);
    },150); //

    return () => clearTimeout(debounceSearch); 
  }, [query]);

  // Maneja el cambio en el campo de entrada
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='search_bar'>
      <input
        className='sb_input'
        type="text"
        placeholder='Ingresa tu Búsqueda'
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
