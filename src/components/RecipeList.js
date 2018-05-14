import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {
  render() {
    console.log('this.props', this.props);

    return(
      <div>
        {
          this.props.recipes.map((recipe, i) => {
            return(
              <div key={i}>
                <h4>{recipe.title}</h4>
              </div>
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);

// second connect argumment is an action creator but is null if there is no action at this point in time
