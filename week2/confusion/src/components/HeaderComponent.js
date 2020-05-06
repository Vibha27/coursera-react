import React, { Component } from 'react';
import { Navbar, NavbarBrand,Jumbotron } from 'reactstrap';

class Header extends Component {

    render() {

        return (

            // react fragment also can be written as <React.Fragment>
            // enables us to group together bunch of react elements 
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                {/* allow to specify info at top */}
                <Jumbotron>
                    <div  className="container">
                        <div className="row row-header" >
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspriration from the world's best cuisines,and create a unique Fusion experience.Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header