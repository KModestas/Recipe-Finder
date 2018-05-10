import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: '',
      dish: ''
    };
  }

  // seen as this is the only component that will utilise this data, adding a local state is fine

  search() {
    const url = 'http://www.recipepuppy.com/api/';
  }

  render() {
    return(
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="garlic, chicken" />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="adobo" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes;
