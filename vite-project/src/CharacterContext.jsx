import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from './services/api';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    try {
      const people = await fetchData('people');
      setCharacters(people.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, loading, error, reload: fetchCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};