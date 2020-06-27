import React, { Component } from 'react'
import {Form,FormGroup,Label,Input, Card, CardHeader, CardBody, Button} from 'reactstrap';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { signIn } from '../../store/actions/authActions';


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        }
        );
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        if(this.props.auth.uid) return (<Redirect to="/"/>);
        const {authError} =this.props;
        const msg = ()=>{
            if(this.props.location.state == null){
                return (null);
            }
            return(this.props.location.state.message);
        }
        
        return (
            <div className="container mt-5">
                <div className="row text-info">
                    <div className="col-md-8 offset-md-2 text-center"><h4>{msg()}</h4></div></div>
                <Card className="shadow col-md-8 offset-md-2 my-4 text-center">
                    <CardHeader className="bg-primary text-white"><h3>Login</h3></CardHeader>
                    <CardBody>
                    <Form onSubmit={(e)=>this.handleSubmit(e)}>
                        <FormGroup className='mb-4' >
                            <Label for="exampleEmail">Email</Label>
                            <Input className='col-md-6 offset-md-3' onChange={e=>this.handleChange(e)} type="email" name="email" id="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup className='mb-4'>
                            <Label for="examplePassword">Password</Label>
                            <Input className='col-md-6 offset-md-3' onChange={e=>this.handleChange(e)} type="password" name="password" id="password" placeholder="Password" />
                        </FormGroup>
                        <Button type='submit' color='primary'>Submit</Button>
                        <FormGroup className='my-3'>
                        Don't have an account? <Link to="/register"> Register here </Link>
                        </FormGroup>
                        <div className="text-danger">
                            {authError? <p>{authError}</p> : null}
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
        authError: state.auth.authError,
        auth : state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signIn : (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
