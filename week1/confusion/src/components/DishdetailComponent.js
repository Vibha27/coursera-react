import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if(dish != null) {
            return (
                <Card>
                    <CardImg  src={this.props.dish.image}/>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        
        return (
            <div>
                <h4>Comments</h4>
                {comments.map((comment)=>{

                    return (

                        <div key={comment.id}>   
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {comment.date}</p>
                               
                        </div>
                    );
                })

                }
            </div>
        );
        
        
    }

    render() {
        return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1"> 
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1"> 
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
           
        );
    }
} 

export default DishDetail;