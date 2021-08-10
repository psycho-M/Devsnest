const updateLocation = (location) => {
    return {
        type: 'UPDATE_LOCATION',
        payload: location,
    };
};

const updateLocData = (location) => {
    return (dispatch) => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=30a3e9cc1a084b70b01124944210908&q=${location}`)
            .then(response => response.json())
            .then(data => {
                console.log("loading data", data);
                dispatch({
                    type: 'UPDATE_LOC_DATA',
                    payload: data,
                });
            })
    };
};

const toggleTheme = () => {
    return {
        type: 'TOGGLE_THEME',
    };
};

export { updateLocData, updateLocation, toggleTheme };

// {
//     type: 'UPDATE_LOC_DATA',
//     payload: locData,
// };