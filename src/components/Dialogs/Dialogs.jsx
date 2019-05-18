import React from 'react';
import s from './Dialogs.module.css';
import Users from './UsersImg';
import MessageImage from './MessageImg';
import AddDialogs from './AddDialogs';

const Dialogs = (props) => {
    let MessageData =
        props.state.Message.map(m => <MessageImage message={m.message} />);

    let DialogData =
        props.state.user.map(d => <Users name={d.name} id={d.id} />);
    return (
        <div className={s.dialog}>
            <div >
                {DialogData}
            </div>
            <div>
                {MessageData}
                <AddDialogs dispatch={props.dispatch}
                    newMessageText={props.state.newMessageText} />
            </div>
        </div>
    );
}
export default Dialogs;