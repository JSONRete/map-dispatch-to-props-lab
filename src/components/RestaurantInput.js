import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // console.log("R being added: ", this.state);
    // add missing code
    this.props.addRestaurant(this.state);
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};


//connect this component by wrapping RestaurantInput below
// export default RestaurantInput
// const addRestaurant = (state) => {
//   return {
//     restaurants: state.restaurants
//   }
// }

// const RestaurantInput = (dispatch) => {
//   return {
//     addTodo: (todo) => {
//       dispatch(addRestaurant(todo))
//     }
//   };
// };

// export default connect(null, addRestaurant)(RestaurantInput);


// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: (newRestaurant) => {
//       dispatch(addRestaurant(newRestaurant))
//     }
//   };
// };


// export default connect(null, mapDispatchToProps)(RestaurantInput);
export default connect(null, { addRestaurant })(RestaurantInput);