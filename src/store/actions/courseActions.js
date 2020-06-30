export const createCourse = (course)=>{
    return (dispatch,getState,{getFirestore,getFirebase}) =>{
        //make async call to database
        const firestore=getFirestore();
        const profile = getState().firebase.profile;
        const auth = getState().firebase.auth;
        firestore.add({ collection: course.category },
        {
            ...course,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:auth.uid,
            authorEmail:auth.email,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_COURSE', course});
        }).catch((err)=>{
            dispatch({type:'CREATE_COURSE_ERROR', course});
        });
        // firestore.collection('courses').add({
        //     ...course,
        //     authorFirstName:'Vineet',
        //     authorLastName:'Yadav',
        //     authorId:12345,
        //     authorEmail:'vineet8588@gmail.com',
        //     createdAt: new Date()
        // }).then(()=>{
        //     dispatch({type:'CREATE_COURSE', course});
        // }).catch((err)=>{
        //     dispatch({type:'CREATE_COURSE_ERROR', course});
        // });
        
    }
}