import React from 'react';
import s from './Posts.module.css'


const Posts =(props)=> {

    return(
        <div className={s.item}>
        <img src='https://previews.123rf.com/images/anwarsikumbang/anwarsikumbang1502/anwarsikumbang150200445/36649700-man-avatar-user-picture-cartoon-character-vector-illustration.jpg'/>
          {props.message}
         <div>
         <span>{props.like} <button >Like </button>   
         {props.dislike}</span>     
         <button>Dislike</button>         
          </div>
        </div>
    );
}
export default Posts; 