
function todoReducer(state = [], action) {
    if(action.type === 'ADD_TODO') {
        // console.log("InReducer: ", state);
        return [...state, action.payload];
    } else if(action.type === 'DEL_TODO') {
        return state.filter((_, index) => index !== action.payload);
    } else if(action.type === 'CLR_TODO') {
        return [];
    } else if(action.type === 'LOAD_TODO') {
        return action.payload;
    }
    return state;
}

export default todoReducer;