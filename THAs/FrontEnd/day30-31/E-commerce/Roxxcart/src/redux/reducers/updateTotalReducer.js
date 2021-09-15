let loginStorage = window.localStorage
// cartStorage.setItem('cart', something)
let amount = loginStorage.getItem('totalAmount') ? JSON.parse(loginStorage.getItem('totalAmount'))  : 0;

const updateTotalReducer = (state = amount, action) => {
    if(action.type === 'UPDATE_TOTAL') {
        let amountStorage = window.localStorage
        amountStorage.setItem('totalAmount', state+action.payload);
        
        return state + action.payload;
    }
    return state;
}

export default updateTotalReducer;