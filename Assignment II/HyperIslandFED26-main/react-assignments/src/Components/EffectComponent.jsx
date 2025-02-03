import React, { useState, useEffect } from "react";
import "./EffectComponent.css";

const API_URL = "https://thronesapi.com/api/v2/Characters";

const GotCharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(API_URL);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Game of Thrones Characters</h1>
      <ul className="character-list">
        {characters.map(({ id, imageUrl, fullName, title }) => (
          <li key={id} className="character-item">
            <img src={imageUrl} alt={fullName} className="character-image" />
            <h2>{fullName}</h2>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GotCharactersList;