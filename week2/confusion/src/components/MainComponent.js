import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// DishdetailComponent  
import DishDetail from './DishdetailComponent';

class Main extends Component {

  constructor(props){

    super(props);

    this.state = {
      dishes : DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish : dishId });
}
  render() {
    return (
      <div className="App">
        
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)} />
        
        {this.state.selectedDish ? (
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]}/>
        ) : (<div></div>)}
        
        <Footer />
        </div>
    );
  }
}

export default Main;
