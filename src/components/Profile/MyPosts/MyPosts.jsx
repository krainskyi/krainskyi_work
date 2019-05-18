import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {addPostActionCreator, updateOnPostChange} from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    

    let postdata =
        props.state.posts.map(m => <Posts message={m.message} like={m.like} dislike={m.dislike} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateOnPostChange(text));
    }


    return (
        <div className={s.postitems}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.state.newPostText} />
                <div>
                    <button onClick={addPost}>Add message</button>
                </div>
            </div>
            <div className={s.posts}>
                {postdata}
            </div>
        </div>

    );
}
export default MyPosts;