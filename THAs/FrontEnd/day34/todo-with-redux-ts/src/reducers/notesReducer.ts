interface addNoteAction {
    type: string;
    payload: string;
}

interface deleteNoteAction {
    type: string;
    payload: number;
};

type ActionType = addNoteAction | deleteNoteAction;

const notesReducer = (state: any[] = [], action: ActionType) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return [...state, action.payload];
        case 'DELETE_NOTE' :
            return state.filter((note: string, index: number) => index !== action.payload);
        default:
            return state;
    };
};

export default notesReducer;