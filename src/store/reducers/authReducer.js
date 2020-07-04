const initState={
    authError: null
}

const authReducer = (state=initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login error');
            return {
                ...state,
                authError : 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return{
                ...state,
                authError : null
            }
        case 'LOGOUT_SUCCESS':
            console.log('Logout success');
            return {authError: null};
        case 'SIGNUP_SUCCESS':
            console.log('Signup success');
            return ({
                ...state,
                authSignUpError : null
            });
        case 'SIGNUP_ERROR':
            console.log('Signup error');
            return ({
                ...state,
                authSignUpError : action.err.message
            });
        default:
            return state;
    }
}

export default authReducer;