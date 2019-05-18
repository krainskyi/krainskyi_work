import React from 'react';
import s from './Dialogs.module.css';
import {addMessageActionCreator,updateOnMessageChange} from '../../redux/dialogs-reducer';



const AddDialogs = (props) => {

    let addMessage = ()=>{
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange =(e)=>{
        let text = e.target.value;
        props.dispatch(updateOnMessageChange(text));
    }
  

    return (<div className={s.addMessage}>
        <textarea onChange={onMessageChange} value={props.newMessageText}/>
        <div>
        <button  onClick={addMessage}>Push message</button>
            </div>
    </div>

    );
}
export default AddDialogs;