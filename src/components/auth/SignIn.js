import React, { Component } from 'react'
import {Form,FormGroup,Label,Input, Card, CardHeader, CardBody, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

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
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
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
                    </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default SignIn;
