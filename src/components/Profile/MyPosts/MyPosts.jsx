import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {
    debugger;
    let postdata =
        props.posts.map(m => <Posts message={m.message} 
            key={m.id}like={m.like} dislike={m.dislike} />);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postitems}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.newPostText} />
                <div>
                    <button onClick={onAddPost}>Add message</button>
                </div>
            </div>
            <div className={s.posts}>
                {postdata}
            </div>
        </div>

    );
}
export default MyPosts;