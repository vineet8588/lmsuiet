const initState={
    courses:[
    ]
}

const courseReducer = (state=initState,action) => {
    switch(action.type){
        case 'CREATE_COURSE':
            console.log('Created course',action.course);
            return {
                ...state,
                courseId: action.courseId
            };
        case 'CREATE_PROJECT_ERR':
            console.log('Create project error'.action.error)
            break;
        case 'STATE_RESET':
            const {auth,firestore,firebase} = state;
            state = {auth,firestore,firebase};
            return state;
        default:
            return state;
    }
}

export default courseReducer;