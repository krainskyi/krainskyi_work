const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    Message: [
        { message: 'Yo guys' },
        { message: 'Hi how are you' },
        { message: 'I from Ukraine' },
        { message: 'I from Ukraine' },
        { message: 'I from Ukraine' },
        { message: 'I from Ukraine' }
    ],
    user: [
        { id: 1, name: 'Yura' },
        { id: 2, name: 'Lana' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Igor' },
        { id: 5, name: 'Boby' }
    ],
    newMessageText: ['Write new message']
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:           //add dialogs message
            return {
                ...state,
                newMessageText: action.newText
            };
       
        case ADD_MESSAGE:       // add dialogs message
            let text = state.newMessageText;
            return  {
                ...state,
                newMessageText: '',
                Message: [...state.Message, { id: 6, message: text }]
            };
           
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });//add dialogs message
export const updateOnMessageChange = (text) =>
    ({ type: 'UPDATE-NEW-MESSAGE', newText: text });


export default dialogsReducer;
