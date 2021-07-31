
const updateValueReducer = (state = {
    userName: '',
    email: ''
}, action) => {
    if (action.type === 'UPDATE_USERNAME') {
        console.log("UserName Updating\n new value: " + action.payload);
        return {
            userName: action.payload,
            email: state.email,
        };
    } else if(action.type === 'UPDATE_EMAIL') {
        console.log("Email Updating\n new value: " + action.payload);
        return {
            userName: state.userName,
            email: action.payload
        };
    }
    console.log("updateValueReducer: ", state);
    return state;
}

export default updateValueReducer;