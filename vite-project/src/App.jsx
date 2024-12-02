import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CharacterContext } from './CharacterContext';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;