import React from 'react';
import s from './Dialogs.module.css';
import {addMessageActionCreator,updateOnMessageChange} from '../../redux/state';



const AddDialogs = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = ()=>{
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange =()=>{
        let text = newMessageElement.current.value;
        props.dispatch(updateOnMessageChange(text));
    }
  

    return (<div className={s.addMessage}>
        <textarea onChange={onMessageChange} ref={newMessageElement}
                    value={props.newMessageText}/>
        <div>
        <button  onClick={addMessage}>Push message</button>
            </div>
    </div>

    );
}
export default AddDialogs;