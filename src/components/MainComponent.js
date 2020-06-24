import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CourseList from './CourseList'
import CreateCourse from './CreateCourse';

class Main extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/login" component={SignIn}/>
                    <Route path="/home/:courseId" component={CourseList}/>
                    <Route path="/register" component={SignUp}/>
                    <Route path="/create" component={CreateCourse}/>
                    <Redirect to="/home"/>
                </Switch>
            </React.Fragment>

        );
    }

}

export default Main;