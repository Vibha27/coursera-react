import React, { Component } from 'react';
import { Card, CardImg,CardText,CardBody,CardTitle, Breadcrumb,BreadcrumbItem, Button,Modal,ModalBody,ModalHeader,Label,Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors  } from 'react-redux-form';

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
                {/* CommentForm Component */}
                <CommentForm />

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
                    <RenderComments comments={props.comments} />
                

                </div>
            </div>
            </div>
        );
        

    }
 

export default DishDetail;