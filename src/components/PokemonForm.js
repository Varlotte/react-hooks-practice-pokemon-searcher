import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          const name = e.target.name.value;
          const hp = e.target.hp.value;
          const frontUrl = e.target.frontUrl.value;
          const backUrl = e.target.backUrl.value;
          const newPokemon = {
            name,
            hp,
            frontUrl,
            backUrl,
          };

          addPokemon(newPokemon);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
