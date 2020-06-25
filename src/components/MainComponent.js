import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {CATEGORIES} from '../shared/categories';
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
            categories:CATEGORIES
        }
    }

    render(){
        //props are {match,location and history},only extracting match
        const SelectedCourseList = ({match})=>{
            return(
                <CourseList categ={this.state.categories.filter((categ)=> categ.id === parseInt(match.params.categId,10))[0]} />
            )
        }
        return(
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={()=><Home categories={this.state.categories}/>}/>
                    <Route path="/login" component={SignIn}/>
                    <Route path="/home/:categId" component={SelectedCourseList}/>
                    <Route path="/register" component={SignUp}/>
                    <Route path="/create" component={CreateCourse}/>
                    <Redirect to="/home"/>
                </Switch>
            </React.Fragment>

        );
    }

}

export default Main;