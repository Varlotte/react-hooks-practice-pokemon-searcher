import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleChange = (fieldName) => {
    return (e) => {
      const val = e.target.value;
      switch (fieldName) {
        case "name":
          setName(val);
          break;
        case "hp":
          setHp(val);
          break;
        case "front":
          setFront(val);
          break;
        case "back":
          setBack(val);
          break;
        default:
          return;
      }
    };
  };
  console.log(name);

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          const newPokemon = {
            name,
            hp,
            sprites: {
              front,
              back,
            },
          };

          addPokemon(newPokemon);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange("name")}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={hp}
            onChange={handleChange("hp")}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={handleChange("front")}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={handleChange("back")}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
