const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
let store = {
    _state: {

        profilePage: {
            posts: [
                { message: 'Hey Body! How are you?' },
                { like: '15', dislike: '20' },
                { message: 'Its my first project', like: '0', dislike: '1' },
                { message: 'I from Ukraine', like: '125', dislike: '120' }
            ],
            newPostText: ['Hello pls write text']

        },
        dialogsPage: {
            Message: [
                { message: 'Yo guys' },
                { message: 'Hi how are you' },
                { message: 'I from Ukraine' },
                { message: 'I from Ukraine' },
                { message: 'I from Ukraine' },
                { message: 'I from Ukraine' }
            ],
            user: [
                { id: 1, name: 'Yura' },
                { id: 2, name: 'Lana' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Igor' },
                { id: 5, name: 'Boby' }
            ],
            newMessageText: ['Write new message']
        }
    },
    _callSubscriber() {
        console.log('im change state');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0,
                dislike: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') { // add dialogs message
            let newMessage = {
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.Message.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE') { //add dialogs message
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);

        }
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateOnPostChange = (text) =>
    ({ type: 'UPDATE-NEW-POST', newText: text });

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });//add dialogs message
export const updateOnMessageChange = (text) =>
    ({ type: 'UPDATE-NEW-MESSAGE', newText: text });


export default store;
