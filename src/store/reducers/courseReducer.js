const initState={
    courses:[
        {id:1,title:'CS401',description:'blah blah blah'},
        {id:2,title:'CS402',description:'blah blah blah'},
        {id:3,title:'CS403',description:'blah blah blah'}
    ]
}

const courseReducer = (state=initState,action) => {
    switch(action.type){
        case 'CREATE_COURSE':
            console.log('Created course',action.course);
    }
    return state;
}

export default courseReducer;