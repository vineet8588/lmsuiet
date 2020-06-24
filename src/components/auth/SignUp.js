import React, { Component } from 'react'
import {Form,FormGroup,Label,Input, Card, CardHeader, CardBody, Button} from 'reactstrap';

class SignUp extends Component {
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
                    <CardHeader className="bg-primary text-white"><h3>Register</h3></CardHeader>
                    <CardBody>
                    <Form onSubmit={(e)=>this.handleSubmit(e)}>
                        <FormGroup className='mb-4'>
                            <Label for="examplePassword">Name</Label>
                            <div className="row">
                                <div className='col-md-3 offset-md-3'>
                                <Input className='' onChange={e=>this.handleChange(e)} type='text' name="firstname" id="firstname" placeholder="First Name" />
                                </div>
                                <div className='col-md-3'>
                                <Input className='' onChange={e=>this.handleChange(e)} type='text' name="lastname" id="lastname" placeholder="Last Name" />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className='mb-4' >
                            <Label for="exampleEmail">Email</Label>
                            <div className="row">
                            <Input className='col-md-6 offset-md-3' onChange={e=>this.handleChange(e)} type="email" name="email" id="email" placeholder="Email" />
                            </div>
                        </FormGroup>
                        <FormGroup className='mb-4'>
                       
                            <Label for="examplePassword">Password</Label>
                            <div className="row">
                            <Input className='col-md-6 offset-md-3' onChange={e=>this.handleChange(e)} type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        </FormGroup>
                        <Button type='submit' color='primary'>Submit</Button>
                    </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default SignUp;
