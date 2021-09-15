const locationReducer = (state = "", action) => {
    if(action.type === 'UPDATE_LOCATION') {
        return action.payload;
    } 
    return state;
};

export default locationReducer;