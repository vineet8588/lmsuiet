export const addVideo = (videoInfo)=>{
    return (dispatch,getState,{getFirestore,getFirebase}) =>{
        //make async call to database
        const firestore=getFirestore();
        const auth = getState().firebase.auth;
        firestore.collection(videoInfo.courseCategory).doc(videoInfo.courseId).collection("videos").add(
        {
            ...videoInfo,
            authorId:auth.uid,
            authorEmail:auth.email,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'ADD_VIDEO', videoInfo});
        }).catch((err)=>{
            dispatch({type:'ADD_VIDEO_ERROR', videoInfo});
        });   
    }
}