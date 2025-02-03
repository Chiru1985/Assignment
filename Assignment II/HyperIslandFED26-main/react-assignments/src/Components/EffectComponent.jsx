import React, { useState, useEffect } from "react";
import "./EffectComponent.css";

const GotCharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://thronesapi.com/api/v2/Characters");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const renderCharacter = (character) => (
    <li key={character.id}>
      <img src={character.imageUrl} alt={character.fullName} />
      <h2>{character.fullName}</h2>
      <p>{character.title}</p>
    </li>
  );

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <ul>
        {characters.map(renderCharacter)}
      </ul>
    );
  };

  return (
    <center>
      <h1>Game of Thrones Characters</h1>
      {renderContent()}
    </center>
  );
};

export default GotCharactersList;