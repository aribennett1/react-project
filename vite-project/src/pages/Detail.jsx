import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { fetchData } from '../services/api';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [species, setSpecies] = useState(null);
  const [homeWorld, setHomeWorld] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchData('people', id);
        setCharacter(data);
        setHomeWorld(await fetchDataFromDetails([data.homeworld], 'planets'));
        if (data.species && data.species.length > 0) {
          setSpecies(await fetchDataFromDetails(data.species, 'species'));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!character) return null;

  return (
    <div className="body">
      <p>Birth Year: {character.birth_year}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Height: {character.height}</p>
      <p>Home World: {homeWorld}</p>
      <p>Mass: {character.mass}</p>
      {species && <p>Species: {species}</p>}      
    </div>
  );
};

export default Detail;

async function fetchDataFromDetails(urls, type) {
  const dataPromises = urls.map(async (url) => {
    const data = await fetchData(type, url.match(/(\d+)/)[0]);
    return data.name;
  });

  const dataNames = await Promise.all(dataPromises);
  return dataNames.join(', ');
}
  