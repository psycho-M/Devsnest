let initialState =  {
    userName: '',
    email: ''
}

const updateValueReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_USERNAME') {
        // console.log("UserName Updating\n new value: " + action.payload);
        initialState.userName = action.payload;
        return { ...initialState, userName: action.payload };
    } else if(action.type === 'UPDATE_EMAIL') {
        // console.log("Email Updating\n new value: " + action.payload);
        initialState.email = action.payload;
        return { ...initialState, email: action.payload };
    }
    console.log("updateValueReducer: ", initialState);
    return state;
}

export default updateValueReducer;