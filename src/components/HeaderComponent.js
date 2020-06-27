import React, { Component } from 'react';
import {Nav,NavItem,Navbar,NavbarBrand,Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    
    render(){
        const signedInLinks = ()=>{
            return(
            <React.Fragment>
            <NavLink to="/create"> <Button color="info">Create Course</Button></NavLink>
            <NavLink onClick={this.props.signOut} to="/"> <Button color="warning">Logout</Button></NavLink>
            </React.Fragment>);
        }
        const signedOutLinks = () => <NavLink to="/login"> <Button color="success">Login</Button></NavLink>
        const links = this.props.auth.uid ? signedInLinks() : signedOutLinks()
        
        return(
            <React.Fragment>
                <Navbar className="shadow">
                    <div className="container">
                    <NavbarBrand href='/' className="mr-auto" style={{color:'black',textDecoration:'none'}}>LMSUIET</NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                {links}
                            </NavItem>
                        </Nav>
                </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut : () =>dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);