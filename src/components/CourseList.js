import React from 'react';
import {Card,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import readIcon from '../shared/read-icon.png'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import moment from 'moment';
import {Link} from 'react-router-dom';

function RenderCourse({courses,categ}){
    return(
        courses.map((course)=>
        <div className="row" key={course.id}>
            <div className="col-12">
                <Link to={{
                            pathname: `/home/${categ.id}/${course.id}`,
                            state: { courseTitle: course.title }
                        }}  style={{textDecoration:'none', color:'black'}}>
            <Card className='my-3 shadow-sm p-2 text-dark btn-light'> 
                <div className="media" >
                    <img className="align-self-center mr-3 mediaimg" src={readIcon} alt="Generic placeholder"/>
                    <div className="media-body">
                        <h5 className="m-2">{course.title}</h5>
                        <p className="m-2">{course.description}</p>
                        <footer className="m-2 text-right blockquote-footer"> Created by <cite title="Source Title">{course.authorFirstName} {course.authorLastName}</cite>
                        <br/>{moment(course.createdAt.toDate()).calendar()}
                        </footer>
                    </div>
                </div>
            </Card>
            </Link>
            </div>
            </div>
        )
    );
}

function CourseList(props){
    return (
        <div className='container my-3'>
            <div className="row m-2"><h1>Courses</h1></div>
            <div className="row m-2"><h4>{props.categ.name}</h4></div>
            <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/home"> Home</BreadcrumbItem>
            <BreadcrumbItem active tag="span">{props.categ.name}</BreadcrumbItem>
            </Breadcrumb>
            <RenderCourse courses={props.courses} categ={props.categ}/>    
        </div>
      );
}

const mapStatetoProps = (state,props) =>{
    return{
        courses: state.firestore.ordered[props.categ.name] || state.course.courses
    };
}

export default compose(connect(mapStatetoProps),firestoreConnect((props)=>{return[{collection:props.categ.name, orderBy: ['createdAt','desc']}]}))(CourseList);