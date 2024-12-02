import React, { useContext } from 'react';
import { CharacterContext } from '../CharacterContext';
import CharacterList from '../components/CharacterList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const { characters, loading, error } = useContext(CharacterContext);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="body">
      <CharacterList characters={characters} />
    </div>
  );
};

export default Home;