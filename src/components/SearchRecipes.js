import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
  render() {
    return(
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
        </FormGroup>
        {''}
        <FormGroup>
        </FormGroup>
      </Form>
    );
  }
}

export default SearchRecipes;
