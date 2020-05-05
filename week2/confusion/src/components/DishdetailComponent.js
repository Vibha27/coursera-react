import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if(dish != null) {
            return (
                
                <Card>
                    <CardImg  src={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
        
        return (
            <div>
                <h4>Comments</h4>
                {comments.map((comment)=>{

                    return (

                        <div key={comment.id}>   
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                               
                        </div>
                    );
                    })

                }
            </div>
        );
        
        
    }

    const DishDetail = (props) => {

        return (
            <div className="container">
                <div className="row">
                        <div className="col-12 col-md-5 m-1"> 
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1"> 
                            <RenderComments comments={props.dish.comments} />
                        </div>       
                </div>
            </div>
        );

    }
 

export default DishDetail;