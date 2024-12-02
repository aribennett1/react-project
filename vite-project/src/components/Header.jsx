import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/Header.css';

const Header = ({ characters }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const characterName = id ? characters.find((char) => char.url.includes(id))?.name : null;

  return (
    <header className="header">
      {id && (
        <button className="back-button" onClick={() => navigate("/")}>
          ← Home
        </button>
      )}
      <h1 className="header-title">
        {characterName || 'Star Wars Characters'}
      </h1>
    </header>
  );
};

export default Header;