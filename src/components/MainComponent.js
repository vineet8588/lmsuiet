import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {CATEGORIES} from '../shared/categories';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CourseList from './CourseList'
import CreateCourse from './CreateCourse';
import VideoManager from './VideoManager';
import VideoList from './VideoList'
import CourseManager from './CourseManager';

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
        const SelectedVideoList = ({match,location})=>{
            if(!location.state) return <Redirect to="/home"/>
            return(
                <VideoList categ={this.state.categories.filter((categ)=> categ.id === parseInt(match.params.categId,10))[0]} courseId={match.params.courseId} courseTitle={location.state.courseTitle}/>
            )
        }
        return(
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path="/manage" component={()=><CourseManager categories={this.state.categories}/>}/>
                    <Route exact path="/home" component={()=><Home categories={this.state.categories}/>}/>
                    <Route path="/login" component={SignIn}/>
                    <Route exact path="/home/:categId" component={SelectedCourseList}/>
                    <Route path="/home/:categId/:courseId" component={SelectedVideoList}/>
                    <Route path="/register" component={SignUp}/>
                    <Route path="/create" component={CreateCourse}/>
                    <Route path="/videomanager" component={VideoManager}/>
                    <Redirect to="/home"/>
                </Switch>
            </React.Fragment>

        );
    }

}

export default Main;