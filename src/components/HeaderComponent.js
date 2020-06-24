import React, { Component } from 'react';
import {Nav,NavItem,Navbar,NavbarBrand,Button,Jumbotron} from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark color='primary'>
                    <div className="container">
                        <NavbarBrand className="mr-auto">LMSUIET</NavbarBrand> 
                        <Nav navbar>
                            <NavItem>
                                <Button tag={Link} to="/login" color="success" size='lg'>Login</Button>{' '}
                            </NavItem>
                        </Nav>
                </div>
                </Navbar>
                <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>LMSUIET</h1>
                            <p>A platform to manage lectures.</p>
                        </div>
                    </div>
                </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;