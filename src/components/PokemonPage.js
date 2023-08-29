import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const pokeURL = "http://localhost:3001/pokemon";
  const [pokeData, setPokeData] = useState([]);
  const [filteredPokeData, setFilteredPokeData] = useState(pokeData);

  useEffect(() => {
    fetch(pokeURL)
      .then((r) => r.json())
      .then((data) => {
        setPokeData(data);
        setFilteredPokeData(data);
      });
  }, []);

  const updateSearch = (name) => {
    const filtered = pokeData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );

    setFilteredPokeData(filtered);
  };

  const addPokemon = (newPokemon) => {
    console.log(newPokemon);
    // do a POST request to add the pokemon, and update the list
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search updateSearch={updateSearch} />
      <br />
      <PokemonCollection pokeData={filteredPokeData} />
    </Container>
  );
}

export default PokemonPage;
