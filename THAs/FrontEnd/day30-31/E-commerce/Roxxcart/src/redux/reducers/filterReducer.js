import data from "../../data";

let isGenderSelected = false;
let isSizeSelected = false;
let currSize = 'ALL', currGender = 'SELECT';
let tempState;
const allMen = data.filter(item => item.category === 'Men');
const allWomen = data.filter(item => item.category === 'Women');




const filterReducer = (state = data.slice(), action) => {
    switch (action.type) {
        case 'FILTER_BY_GENDER':
            currGender = action.payload;
            if (action.payload === 'Select') {
                isGenderSelected = false;
                if (isSizeSelected) {
                    tempState = data.filter(item => item.size.includes(currSize));
                } else {
                    tempState = data;
                }
            } else {
                isGenderSelected = true;
                if (isSizeSelected) {
                    if(action.payload === "Men")
                        tempState = allMen.filter(item => item.size.includes(currSize));
                    else
                        tempState = allWomen.filter(item => item.size.includes(currSize));
                } else {
                    if(action.payload === "Men")
                        tempState = allMen;
                    else
                        tempState = allWomen;
                }
            }


            console.log(tempState);
            if (tempState === []) {
                window.alert('No products of such categorization available!');
                return data;
            } else if (tempState === state) {
                window.alert('No products of such categorization available!');
                return state;
            } else {
                return tempState;
            }
            

        case 'FILTER_BY_SIZE':
            currSize = action.payload;
            if (action.payload === 'ALL') {
                isSizeSelected = false;
                if (isGenderSelected) {
                    if(currGender === 'Men')
                        tempState = allMen;
                    else
                        tempState = allWomen;
                } else {
                    tempState = data;
                }
                    
            } else {
                isSizeSelected = true;
                if (isGenderSelected) {
                    if(currGender === 'Men') {
                    tempState =  allMen.filter(item => item.size.includes(action.payload));
                    } else {
                    tempState =  allWomen.filter(item => item.size.includes(action.payload));
                    }
                } else {
                    tempState =  data.filter(item => item.size.includes(action.payload));
                }
            }

            console.log(tempState);
            if (tempState === []) {
                window.alert('No products of such categorization available!');
                return data;
            } else if (tempState === state) {
                window.alert('No products of such categorization available!');
                return state;
            } else {
                return tempState;
            }
        case 'FILTER_BY_PRICE':
            tempState = [...state];
            tempState.sort((first, second) => first.price - second.price);
            if(action.payload === 'lowestprice') {
                return tempState;
            }
            else if(action.payload === 'highestprice') {
                return tempState.reverse();
            }
            else {
                return state;
            }
                
        default:
            return state;
    }
}



export default filterReducer;