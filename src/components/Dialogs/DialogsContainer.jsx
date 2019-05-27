import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateOnMessageChange } from '../../redux/dialogs-reducer';



let mapStateToProps = (state) => {
    return {
        Message: state.dialogsPage.Message,
        user: state.dialogsPage.user,
        newMessageText: state.dialogsPage.newMessageText
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChangeText: (text) => {
            let action = updateOnMessageChange(text);
            dispatch(action);
            }
        }
    }

const DialogsContainer =
    connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


