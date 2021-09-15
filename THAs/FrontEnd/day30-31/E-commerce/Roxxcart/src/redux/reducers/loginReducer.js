let loginStorage = window.localStorage
// cartStorage.setItem('cart', something)
let initialLoginStatus = loginStorage.getItem('details') ? true : false;


const loginReducer = (state = initialLoginStatus, action)=>{
    if(action.type === 'LOGIN'){
        console.log(state);
        loginStorage.setItem('loginStatus', !state);
        return !state;
    }
    return state;
}

export default loginReducer