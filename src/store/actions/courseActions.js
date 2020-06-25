export const createCourse = (course)=>{
    return (dispatch,getState,{getFirestore,getFirebase}) =>{
        //make async call to database
        const firestore=getFirestore();
        firestore.add({ collection: course.category },
        {
            ...course,
            authorFirstName:'Vineet',
            authorLastName:'Yadav',
            authorId:12345,
            authorEmail:'vineet8588@gmail.com',
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