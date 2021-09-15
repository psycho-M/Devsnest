const addQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        payload: id
    };
};

const subQuantity = (id) => {
    return {
        type: 'SUB_QUANTITY',
        payload: id
    };
};

const addProduct = (item) => {
    return {
        type: 'ADD_PRODUCT',
        payload: item
    };
};

const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: id
    };
};

const updateTotal = (change) => {
    return {
        type: 'UPDATE_TOTAL',
        payload: change
    }
};

const updateSize = (selectedSize, id) => {
    return {
        type: 'UPDATE_SIZE',
        payload: selectedSize,
        itemId: id
    };
}

const filterByGender = (gender) => {
    return {
        type: 'FILTER_BY_GENDER',
        payload: gender
    };
}

const filterBySize = (size) => {
    return {
        type: 'FILTER_BY_SIZE',
        payload: size
    };
}

const filterByPrice = (priceOrder) => {
    return {
        type: 'FILTER_BY_PRICE',
        payload: priceOrder
    };
}

const addFav = (item) => {
    return {
        type: 'ADD_FAV',
        payload: item
    };
}

const subFav = (item) => {
    return {
        type: 'SUB_FAV',
        payload: item
    };
}

const loginStatus = (status) =>{
    return{
        type: 'LOGIN',
        payload: status
    }
}

const updateLocalStorageCartData = (data) =>{
    return{
        type: 'UPDATE_LOCAL_STORAGE',
        payload: data
    }
}


export {
    addQuantity,
    subQuantity, 
    addProduct, 
    removeProduct, 
    updateTotal, 
    updateSize, 
    filterByGender, 
    filterBySize,
    filterByPrice,
    addFav,
    subFav,
    loginStatus, 
    updateLocalStorageCartData
};

