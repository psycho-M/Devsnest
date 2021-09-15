import { ActionType } from "./counterReducer";

const inputReducer = (state = 0, action: ActionType) => {
    switch(action.type) {
        case "UPDATE_NUMBER":
            return action.payload;
        default:
            return state;
    };
};

export default inputReducer;