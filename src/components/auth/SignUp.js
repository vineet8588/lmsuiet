import React, { Component } from 'react'
import {Form,FormGroup,Label,Input, Card, CardHeader, CardBody, Button} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/authActions';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            firstName: '',
            lastName: ''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    
    handleChange(e){
        if(e.target.id==='firstName' || e.target.id==='lastName'){
            this.setState({
                [e.target.id]:  e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            }
            );
        }
        else{
        this.setState({
            [e.target.id]: e.target.value
        }
        );}
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.signUp(this.state);
    }
    
    render() {
        const {authSignUpError} = this.props;
        if(this.props.auth.uid) return (<Redirect to="/"/>);
        return (
            <div className="container mt-5">
                <Card className="shadow col-md-8 offset-md-2 my-4 text-center">
                    <CardHeader className="bg-primary text-white"><h3>Register</h3></CardHeader>
                    <CardBody>
                    <Form onSubmit={(e)=>this.handleSubmit(e)}>
                        <FormGroup className='mb-4'>
                            <Label for="Name">Name</Label>
                            <div className="row">
                                <div className='col-md-3 my-md-0 offset-md-3'>
                                <Input className='' onChange={e=>this.handleChange(e)} type='text' name="firstName" id="firstName" placeholder="First Name" />
                                </div>
                                <div className='col-md-3 mt-2 my-md-0'>
                                <Input className='' onChange={e=>this.handleChange(e)} type='text' name="lastName" id="lastName" placeholder="Last Name" />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className='mb-4' >
                            <Label for="Email">Email</Label>
                            <div className="row">
                            <Input className='col-md-6 offset-md-3' onChange={e=>this.handleChange(e)} type="email" name="email" id="email" placeholder="Email" />
                            </div>
                        </FormGroup>
                        <FormGroup className='mb-4'>
                       
                            <Label for="Password">Password</Label>
                            <div className="row">
                            <Input className='col-md-6 offset-md-3' onChange={e=>this.handleChange(e)} type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        </FormGroup>
                        <Button type='submit' color='primary'>Submit</Button>
                        <div className="text-danger mt-3">
                            {authSignUpError? <p>{authSignUpError}</p> : null}
                        </div>
                    </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        auth : state.firebase.auth,
        authSignUpError : state.auth.authSignUpError
    }
}
const mapDispatchToProps = (dispatch) =>{
    return({
        signUp:(newUser)=>{
            dispatch(signUp(newUser));
        }
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
