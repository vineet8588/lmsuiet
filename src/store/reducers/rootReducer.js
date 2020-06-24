import courseReducer from './courseReducer';
import authReducer from './authReducer';

import {combineReducers} from 'redux';

const rootReducer =combineReducers({
    auth: authReducer,
    course: courseReducer
})

export default rootReducer;