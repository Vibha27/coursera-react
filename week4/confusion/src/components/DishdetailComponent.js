import React, { Component } from 'react';
import { Card, CardImg,CardText,CardBody,CardTitle, Breadcrumb,BreadcrumbItem, Button,Modal,ModalBody,ModalHeader,Label,Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors  } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

    function RenderDish({dish}) {
        if(dish != null) {
            return (
                <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)' 
                }}>
                    <Card>
                        <CardImg  src={baseUrl + dish.image}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments, postComment, dishId}) {
        
        return (
            <div>
                <h4>Comments</h4>

                <Stagger in>
                    {comments.map((comment)=>{

                        return (
                            <Fade in>
                                <div key={comment.id}>   
                                            <p>{comment.comment}</p>
                                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    
                                
                                </div>
                            </Fade>
                        );
                        
                        })
                        
                    }
                </Stagger>

                {/* CommentForm Component */}
                <CommentForm dishId={dishId} postComment={postComment} />

            </div>
        );
        
        
    }


// CommentForm class component
class CommentForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment)
        alert("Current state is: "+ JSON.stringify(values));
    }

    RenderModal(){
        return (
          
                // Task 2
                <Modal className="col-12 col-md-9" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=> this.handleSubmit(values)} >

                            <Row className="form-group">
                                <Label htmlfor="rating" xs={12} >Rating</Label>
                                <Col xs={12}>
                                    <Control.select model=".rating"
                                    className="form-control" name="rating">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlfor="author" xs={12}>Your Name</Label>
                                
                                <Col xs={12}>
                                    <Control.text model=".author"
                                    className="form-control" 
                                    name="author"

                                    // Task 3
                                    validators={{
                                        required : val => !!val,
                                        minLength: val => (!!val) ? val.length > 2 : true,
                                        maxLength: (val)=> (!!val) ? val.length < 16 : true

                                    }} />
                                    <Errors className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: "Required",
                                        minLength: "Must be greater than 2 characters",
                                        maxLength:"Must be 15 characters or less"
                                    }}>

                                    </Errors>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="comment" xs={12}>Comment</Label>
                                <Col xs={12}>
                                    <Control.textarea model=".comment" 
                                    className="form-control" name="comment" row="6"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs={12}>
                                    <Button type="submit" value="Submit"  color="primary" >Button</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>

                </Modal>
          
        )
    }

    render() {
        return (
            <div>
                {/* Task1*/}
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span>Submit Comment
                </Button>
                {this.RenderModal()}
                
            </div>

        );
    }

} 

    const DishDetail = (props) => {
        
        if(props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if(props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        }

        else if(props.dish != null) {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} 
                        postComment = {props.postComment}
                        dishId = {props.dish.id}/>
                    

                    </div>
                </div>
                </div>
            );
            }else{
                return <div></div>
            }
            

    }
 

export default DishDetail;