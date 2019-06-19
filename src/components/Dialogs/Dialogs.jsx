import React from 'react';
import s from './Dialogs.module.css';
import Users from './UsersImg';
import MessageImage from './MessageImg';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
    

    let MessageData =
        props.Message.map(m => <MessageImage message={m.message} key={m.id}/>);

    let DialogData =
        props.user.map(d => <Users name={d.name} key={d.id} id={d.id} />);
    
        let newPostElement=React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newPostElement.current.value;
        props.onMessageChangeText(text);
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>; //loginWrong
    return (
        <div className={s.dialog}>
            <div >
                {DialogData}
            </div>
            <div>
                {MessageData}
            </div>
            <div>
            <textarea onChange={onMessageChange} value={props.newMessageText}
                ref={newPostElement} />
                <button onClick={onAddMessage}>Push message</button>
            </div>
            
        </div>
    );
}
export default Dialogs;

