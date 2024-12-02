import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  return (
    <ul>
      {characters.map((character, index) => (
        <li key={index}>
          <Link to={`/detail/${index + 1}`}>{character.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;