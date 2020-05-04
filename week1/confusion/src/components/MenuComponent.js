//necessary for creating component
import React, { Component } from 'react';

// DishdetailComponent 
import DishDetail from './DishdetailComponent';

import { Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap';

// component Menu
class Menu extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
           selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish : dish });
    }

    // return corresponding view to component
    render() {

        const menu = this.props.dishes.map((dish)=> {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    
                    <Card onClick={()=> this.onDishSelect(dish)}>

                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>

                    </Card>
                </div>
            );
        });

        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                {/* passing selected dish to DishDetails component also checking is dish is selected or not*/}
                
                {this.state.selectedDish ? (
                <DishDetail dish={this.state.selectedDish} />
                ) : (
                    // initial -before selecting any dish
                    <div></div>
                )}
                </div>
        );
    }
}

export default Menu;