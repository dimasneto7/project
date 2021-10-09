import React, { useEffect, useState, useContext, useParams } from "react";
import images from "next/image";
import "./View.module.css";

const PokemonView = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((json) => {
        setPokemon(json);
      });
  }, [name]);

  if (!pokemon) {
    return null;
  }

  return (
    <div className="PokemonView">
      <h1>{pokemon.name}</h1>
      <image src={pokemon.sprites.front_default} alt={pokemon.name} />
      Abilities
      <ul className="PokemonView__abilities">
        {pokemon.abilities.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li>{item.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonView;
