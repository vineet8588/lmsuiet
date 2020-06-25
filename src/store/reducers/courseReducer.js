const initState={
    courses:[
    ]
}

const courseReducer = (state=initState,action) => {
    switch(action.type){
        case 'CREATE_COURSE':
            console.log('Created course',action.course);
            break;
        case 'CREATE_PROJECT_ERR':
            console.log('Create project error'.action.error)
            break;
        default:
            return state;
    }
}

export default courseReducer;