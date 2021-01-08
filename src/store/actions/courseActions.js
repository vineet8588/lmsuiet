import { actionTypes } from 'redux-firestore';

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
        }).then((docRef)=>{
            dispatch({type:'CREATE_COURSE', course,courseId: docRef.id});
        }).catch((err)=>{
            dispatch({type:'CREATE_COURSE_ERROR', course});
        });   
    }
}

export const resetState = () =>{
    return (dispatch) => {
        dispatch({type : 'STATE_RESET' });
    };
}

export const firestoreReset = () =>{
    return (dispatch) => {
        dispatch({type: actionTypes.CLEAR_DATA});
    };
}