
const updateValueReducer = (state = {
    userName: '',
    email: ''
}, action) => {
    if (action.type === 'UPDATE_USERNAME') {
        console.log("UserName Updating\n new value: " + action.payload);
        state.userName = action.payload;
        console.log(state);
    } else if(action.type === 'UPDATE_EMAIL') {
        console.log("Email Updating");
        state.email = action.payload;
    }
    console.log("updateValueReducer: ", state);
    return state;
}

export default updateValueReducer;