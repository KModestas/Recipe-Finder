import React, { Component } from 'react';

class RecipeItem extends Component {

  render() {

    const { recipe } = this.props;

    return(
      <div className="recipe-item">
        <a href={recipe.href}>
          <h4 className="recipe-text">{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>
        <img
          src={recipe.thumbnail}
          alt={recipe.title}
          className="recipe-img"
        />
      </div>
    );
  }
}

export default RecipeItem;
