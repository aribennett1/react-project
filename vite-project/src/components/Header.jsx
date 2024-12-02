import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CharacterContext } from '../CharacterContext';
import './styles/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { characters, reload } = useContext(CharacterContext);
  const id = location.pathname.split('/').pop();
  const characterName = id ? characters.find((char) => char.url.includes(id))?.name : null;

  return (
    <header className="header">
      {id && (
        <button className="button" onClick={() => navigate("/")}>
          ← Home
        </button>
      )}
      {!id && (
        <button className="button" onClick={reload}>
        ↻ Refresh
      </button>
      )}
      <h1 className="header-title">
        {characterName || 'Star Wars Characters'}
      </h1>
    </header>
  );
};

export default Header;