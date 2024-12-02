import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from './services/api';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, loading, error }}>
      {children}
    </CharacterContext.Provider>
  );
};