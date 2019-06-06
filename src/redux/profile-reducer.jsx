const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { message: 'Hey Body! How are you?' },
        { like: '15', dislike: '20' },
        { message: 'Its my first project', like: '0', dislike: '1' },
        { message: 'I from Ukraine', like: '125', dislike: '120' }
    ],
    newPostText: ['Hello pls write text'],
    profile:null
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
                dislike: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE:{
            return{
                ...state,
                profile: action.profile

            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile})
export const updateOnPostChange = (text) =>
    ({ type: 'UPDATE-NEW-POST', newText: text });
export default profileReducer;