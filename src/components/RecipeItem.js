import React, { Component } from 'react';

class RecipeItem extends Component {

  render() {

    const { recipe } = this.props;

    return(
      <div>
        <a href={recipe.href}>
          <h4>{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>
      </div>
    );
  }
}

export default RecipeItem;
