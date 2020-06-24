export const createCourse = (course)=>{
    return (dispatch,getState) =>{
        //make async call to database
        dispatch({type:'CREATE_COURSE', course});
    }
}