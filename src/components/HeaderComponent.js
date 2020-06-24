import React, { Component } from 'react';
import {Nav,NavItem,Navbar,NavbarBrand,Button} from 'reactstrap';
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
                <Navbar className="shadow">
                    <div className="container">
                    <NavbarBrand href='/' className="mr-auto" style={{color:'black',textDecoration:'none'}}>LMSUIET</NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <Button tag={Link} to="/login" color="success" size='lg'>Login</Button>{' '}
                            </NavItem>
                        </Nav>
                </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;