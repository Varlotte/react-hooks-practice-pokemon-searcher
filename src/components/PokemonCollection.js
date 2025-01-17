import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeData }) {
  const renderPokemon = pokeData.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
  });
  return (
    <>
      <Card.Group itemsPerRow={4}>
        <h1 className="pokeHeader">Hello From Pokemon Collection</h1>
        {renderPokemon}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
