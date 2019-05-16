import React from 'react';
import s from './Dialogs.module.css';


const MessageImg = (props) => {
    return (
        <div className={s.MessageImg}>
        <div>
            <img src='https://www.pngarts.com/files/1/Message-PNG-Image-with-Transparent-Background.png' />
           <div className={s.message}>
           {props.message}
           </div>
            </div>
        </div>
    );
}
export default MessageImg;
