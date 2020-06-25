import courseReducer from './courseReducer';
import authReducer from './authReducer';
import {firestoreReducer} from 'redux-firestore';

import {combineReducers} from 'redux';

const rootReducer =combineReducers({
    auth: authReducer,
    course: courseReducer,
    firestore: firestoreReducer
})

export default rootReducer;