const updateUsername = (updatedValue) => {
    return {
        type: 'UPDATE_USERNAME',
        payload: updatedValue,
    };
};
const updateEmail = (updatedValue) => {
    return {
        type: 'UPDATE_EMAIL',
        payload: updatedValue,
    };
};



export { updateUsername, updateEmail };