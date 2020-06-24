import React from 'react';
import {Card} from 'reactstrap';
import readIcon from '../shared/read-icon.png'
import {connect} from 'react-redux';

function RenderCourse({courses}){
    return(
        courses.map((course)=>
        <div className="row">
            <div className="col-12">
            <Card className='my-3 shadow-sm p-2'>
                <div className="media">
                    <img className="align-self-center mr-3 mediaimg" src={readIcon} alt="Generic placeholder"/>
                    <div className="media-body">
                        <h5 className="m-2">{course.title}</h5>
                        <p className="m-2">{course.description}</p>
                    </div>
                </div>
            </Card>
            </div>
            </div>
        )
    );
}

function CourseList(props){
    console.log(props);

    return (
        <div className='container my-3'>
            <div className="row m-2"><h1>Courses</h1></div>
            <RenderCourse courses={props.courses}/>    
        </div>
      );
}

const mapStatetoProps = (state) =>{
    return{
        courses: state.course.courses
    }
}

export default connect(mapStatetoProps)(CourseList);