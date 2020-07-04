import React, { Component } from 'react';
import {ListGroupItem,Breadcrumb,BreadcrumbItem, ListGroup} from 'reactstrap';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import "../../node_modules/video-react/dist/video-react.css"; 
import {Player} from 'video-react';
import {withRouter} from 'react-router-dom';
import moment from 'moment';


class VideoList extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    

    render(){
        var videoplayer = null;
        const RenderVideos=({videos})=>{
            return(
                videos.map((video)=>  
                    <ListGroupItem key={video.id} onClick={()=>{this.setState({url:video.url}); this.setState({name:video.name})}} tag="button" action>
                        <i class="fa fa-play mr-3" aria-hidden="true"></i>
                        {video.name}
                        <footer className="text-right blockquote-footer">{moment(video.createdAt.toDate()).calendar()}
                        </footer>
                    </ListGroupItem>
                )
            );
        }
        if(this.state.url){
            console.log(this.state.url);
            videoplayer=<div className='col-md-9 col-12 my-3'>
                    <h4>{this.state.name}</h4>
                    <Player className="mt-3" src={this.state.url} width='400' height='300'/>
                </div>
        }
        return (
            <div className='container my-3'>
                <div className="row m-2"><h2>{this.props.courseTitle}</h2></div>
                <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="/home"> Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" className='text-primary' onClick={this.props.history.goBack}>{this.props.categ.name}</BreadcrumbItem>
                <BreadcrumbItem active tag="span">{this.props.courseTitle}</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                    <div className="col-12 col-md-3 my-3">
                        <ListGroup>
                            <ListGroupItem color='info' active action><h5>Video List</h5></ListGroupItem>
                            <RenderVideos videos={this.props.videos}/>
                        </ListGroup>
                    </div>
                    {videoplayer}
                </div>
            </div>
        );
    }
}


const mapStatetoProps = (state) =>{
    return{
        videos: state.firestore.ordered.videos || []
    };
}

export default compose(connect(mapStatetoProps),firestoreConnect((props)=>{return[
    {
        collection:props.categ.name,
        doc:props.courseId,
        subcollections:[{collection:'videos',orderBy: ['createdAt','asc']}],
    storeAs:'videos' }
    ]}))(withRouter(VideoList));