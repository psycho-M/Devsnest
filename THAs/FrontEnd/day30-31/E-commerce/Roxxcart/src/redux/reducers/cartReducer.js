let cartStorage = window.localStorage
// cartStorage.setItem('cart', something)
let initialCart = cartStorage.getItem('cart') ? JSON.parse(cartStorage.getItem('cart')) : [];
console.log(initialCart);

const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        case 'REMOVE_PRODUCT':
            return state.filter(item => item.id !== action.payload);
        case 'ADD_QUANTITY':
            const tempCart = [...state];
            for (let i = 0; i < tempCart.length; i++) {
                if (tempCart[i].id === action.payload) {
                    tempCart[i].quantity += 1;
                    tempCart[i].currPrice = tempCart[i].price * tempCart[i].quantity;
                    return tempCart;
                }
            }


        case 'SUB_QUANTITY':
            const tempCart1 = [...state];
            for (let i = 0; i < tempCart1.length; i++) {
                if (tempCart1[i].id === action.payload) {
                    tempCart1[i].quantity -= 1;
                    if (tempCart1[i].quantity === 0) {
                        return tempCart1.filter(item => item.id !== action.payload);
                    }
                    tempCart1[i].currPrice = tempCart1[i].price * tempCart1[i].quantity;
                    return tempCart1;
                }
            }
        case 'UPDATE_SIZE':
            const tempCart2 = [...state];
            for (let i = 0; i < tempCart2.length; i++) {
                if (tempCart2[i].id === action.itemId) {
                    console.log(tempCart2);
                    tempCart2[i].currSize = action.payload;
                    return tempCart2;
                }
            }

        case 'UPDATE_LOCAL_STORAGE':
            let cartStorage = window.localStorage;
            let temp = JSON.parse(cartStorage.getItem('cart'))
            console.log("temp in cartReducer",temp);
            return temp ? temp : [];

        default:
            return state;
    };
};

export default cartReducer;