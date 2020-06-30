import React, { Component } from 'react'
import {Form,FormGroup,Label,Input, Card, CardHeader, CardBody, Button} from 'reactstrap';
import {connect} from 'react-redux';
import {createCourse} from '../store/actions/courseActions';
import { CATEGORIES } from '../shared/categories';
import { Redirect } from 'react-router';

class CreateCourse extends Component {
    constructor(props){
        super(props);
        this.state={
            category:'Biotechnology'
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
        this.props.createCourse(this.state);
        this.props.history.push('/');
    }
    render() {
        if(!this.props.auth.uid) return (<Redirect to={{
            pathname: '/login',
            state: { message: 'You must log in first.' }
        }} />);
        const options=CATEGORIES.map((categ)=>
        <option key={categ.id}>{categ.name}</option>)
        return (
            <div className="container">
                <Card className="shadow col-md-8 offset-md-2 my-4 text-center">
                    <CardHeader className="bg-primary text-white"><h3>Create Course</h3></CardHeader>
                    <CardBody>
                    <Form onSubmit={(e)=>this.handleSubmit(e)}>
                        <FormGroup className='mb-4' >
                            <Label for="title">Course Title</Label>
                            <Input className='col-md-6 offset-md-3' onChange={e=>this.handleChange(e)} type='text' name="title" id="title" placeholder="Title" />
                        </FormGroup>
                        <FormGroup className='mb-4'>
                            <Label for="description">Description of Course</Label>
                            <Input className='col-md-6 offset-md-3' onChange={e=>this.handleChange(e)} type='textarea' name="description" id="description" placeholder="Description" />
                        </FormGroup>
                        <FormGroup className='mb-4'>
                            <Label for="category">Category</Label>
                            <Input className='col-md-6 offset-md-3' onChange={e=>this.handleChange(e)} type="select" name="category" id="category">
                                {options}
                            </Input>
                        </FormGroup>
                        <Button type='submit' color='primary'>Create</Button>
                    </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return{
        auth : state.firebase.auth
    };
}

const mapDispatchToProps =(dispatch) =>{
    return{
        createCourse:(course)=>dispatch(createCourse(course)) // this is this.state.createCourse definition
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(CreateCourse);
