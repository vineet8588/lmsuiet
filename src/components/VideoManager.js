import React, { Component } from 'react';
import {storage} from '../config/fbConfig';
import {Progress,ListGroup,ListGroupItem,Card,CardBody,CardSubtitle,CardTitle,Button,Label,Input} from 'reactstrap';
import "../../node_modules/video-react/dist/video-react.css"; 
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {addVideo} from '../store/actions/videoAction';

class VideoManager extends Component{
    constructor(props){
        super(props);
        this.state={
            video : '',
            url:'',
            videoname:'',
            progress: 0,
            courseId: '7J59DuagbMxMQZFjCEW4',
            courseCategory: 'Biotechnology'
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleUpload=this.handleUpload.bind(this);
    }

    handleChange(e){
        if(e.target.files){
            const video=e.target.files[0];
            this.setState(()=>({video}));
        }
        else{
            this.setState({
                [e.target.id]: e.target.value
            }
            );
        }
    }
    
    handleUpload(e){
        e.preventDefault();
        const {video} =this.state; 
        const {videoname} = this.state;
        var metadata = {
            contentType: 'video/mp4',
        };
        const uploadTask = storage.ref(`videos/${this.props.location.state.courseId}/${videoname}`).put(video,metadata);
        uploadTask.on('state_changed',
        (snapshot)=>{
            //progress
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes )*100);
            this.setState({progress});
        },
        (error)=>{
            //error
        },
        ()=>{
            //complete
            
            storage.ref(`videos/${this.props.location.state.courseId}/${videoname}`).getDownloadURL().then(
                url =>{
                    this.setState({progress: 'Done'});
                    console.log(url);
                    this.setState({url});
                    const {courseId,category} = this.props.location.state;
                    this.props.addVideo({courseId:courseId,courseCategory:category,url:url,name: videoname});
                }
            )
        });
        this.setState({videoname:''});
        
    }

    render(){ 
        const RenderVideos=({videos})=>{
            return(
                videos.map((video)=>
                    <ListGroupItem key={video.id}><i className="fa fa-file-video-o mr-3" aria-hidden="true"></i>{video.name}</ListGroupItem>
                )
            );
        }

        var videoPresent = false;
        var msg = null;
        var uploadmsg = null;
        const videoNamesArray = this.props.videos.map((video)=>video.name);

        console.log(this.state.progress);
        if(this.state.progress==='Done'){
            uploadmsg= "Video Uploaded Successfully!"}
        if(videoNamesArray.includes(this.state.videoname)){
            videoPresent= true;
            msg="A video with this name is already present.";
        }


        return(
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-12 col-md-5 my-2'>
                        <Card>
                            <CardBody>
                            <CardTitle><h4>Add a video</h4></CardTitle>
                            <CardSubtitle className="text-muted">Your uploaded videos will be available in 'Added Videos' section.</CardSubtitle>
                            <Progress striped className="my-3" color="success" value={this.state.progress}>{this.state.progress}%</Progress>
                            <div className="text-success text-center pb-2">{uploadmsg}</div>
                            <Label for="videoname">Title of your video:</Label>
                            <Input className='mb-4' onChange={e=>this.handleChange(e)} type='text' name="videoname" id="videoname" placeholder="Video Title" />
                            
                            <input type="file" onChange={e=>this.handleChange(e)} />
                            <div className="text-danger pt-2">{msg}</div>
                            <br/>
                            <div className="text-center pt-2">
                                <Button color="success" className="text-center" disabled={this.state.videoname==='' || videoPresent} onClick={e=>this.handleUpload(e)}>Upload</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-7 my-2">
                        <ListGroup>
                            <ListGroupItem color='info' active><h5>Added Videos</h5></ListGroupItem>
                            <RenderVideos videos={this.props.videos}/>
                        </ListGroup>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps =(state) =>{
    return{
        videos: state.firestore.ordered.videos || []
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        addVideo:(videoInfo)=>dispatch(addVideo(videoInfo)) // this is this.props.addVideo definition
    }
}

export default compose(connect(mapStatetoProps,mapDispatchToProps),firestoreConnect((props)=>{
    return[
    {
        collection:props.location.state.category,
        doc:props.location.state.courseId,
        subcollections:[{collection:'videos',orderBy: ['createdAt','asc']}],
    storeAs:'videos' }
    ]}))(VideoManager);
