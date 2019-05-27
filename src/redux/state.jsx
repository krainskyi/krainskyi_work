import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';



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
                { id: 3, name: 'Sasha'},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }
}

export default store;
