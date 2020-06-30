import React, { Component } from 'react';
import {Nav,NavItem,Navbar,NavbarBrand,Button,DropdownToggle,DropdownMenu,DropdownItem, UncontrolledButtonDropdown} from 'reactstrap';
import {Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    
    render(){
        const initials = this.props.profile.initials;
        const signedInLinks = ()=>{
            return(
            <React.Fragment>
            <UncontrolledButtonDropdown>
                <DropdownToggle className="btn-floating" color="warning" style={{borderRadius:'30px' ,padding:'15px'}}>
                    {initials}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem tag={Link} to="/create">Create Course</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem tag={Link} to="/" onClick={this.props.signOut}>Logout </DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            
            
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
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut : () =>dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);