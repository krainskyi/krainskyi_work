const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:      // add dialogs message
            let newMessage = {
                message: state.newMessageText,
            };
            state.Message.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:           //add dialogs message
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });//add dialogs message
export const updateOnMessageChange = (text) =>
    ({ type: 'UPDATE-NEW-MESSAGE', newText: text });

export default dialogsReducer;