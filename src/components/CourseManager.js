import React from 'react';
import readIcon from '../shared/read-icon.png'
import {Card,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import "../../node_modules/video-react/dist/video-react.css"; 
import {Link} from 'react-router-dom';
import moment from 'moment';


function RenderCourse({courses,authId}){
    return(
        courses.map((course)=>{
            if(course.authorId === authId){ return(
        <div className="row" key={course.id}>
            <div className="col-12">
                <Link to={{
                            pathname: `/videomanager`,
                            state: { category: course.category, courseId: course.id }
                        }}  style={{textDecoration:'none', color:'black'}}>
            <Card className='my-3 shadow-sm p-2 text-dark btn-light'> 
                <div className="media" >
                    <img className="align-self-center mr-3 mediaimg" src={readIcon} alt="Generic placeholder"/>
                    <div className="media-body">
                        <h5 className="m-2">{course.title}</h5>
                        <p className="m-2">{course.description}</p>
                        <footer className="m-2 text-right blockquote-footer">{moment(course.createdAt.toDate()).calendar()}
                        </footer>
                    </div>
                </div>
            </Card>
            </Link>
            </div>
            </div>);
            }
            else{
                return(null);
            }
        }
        )
    );
}

function CourseManager(props){
    return (
        <div className='container my-3'>
            <div className="row m-2"><h3>Your Courses</h3></div>
            <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/home"> Home</BreadcrumbItem>
            <BreadcrumbItem active tag="span">Manage Courses</BreadcrumbItem>
            </Breadcrumb>
            <RenderCourse courses={props.allcourses} authId={props.authId}/>    
        </div>
      );
}

const mapStatetoProps = (state) =>{
    const courses = [].concat.apply([],Object.values(state.firestore.ordered));
    return{
        authId : state.firebase.auth.uid,
        allcourses: courses || state.course.courses
    };
}

export default compose(connect(mapStatetoProps),firestoreConnect((props)=>props.categories.map(a=>a.name)))(CourseManager);