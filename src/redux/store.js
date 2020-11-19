import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profleReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi. It's me.", likeCount: 15 },
                { id: 2, message: "Where are you.", likeCount: 20 },
                { id: 3, message: "Call me plz.", likeCount: 7 },
                { id: 4, message: "Sorry.", likeCount: 1 },
            ],
            newPostText: "input"    
        },
        dialogsPage: {
            messageData: [
                { id: 1, message: "Hi. It's me." },
                { id: 2, message: "Where are you." },
                { id: 3, message: "Call me plz." },
                { id: 4, message: "Sorry." },
            ],
            dialogsData: [
                { id: 1, name: "Sasha" },
                { id: 2, name: "Vita" },
                { id: 3, name: "Oleg" },
                { id: 4, name: "Sveta" },
                { id: 5, name: "Petro" },
                { id: 6, name: "Sasha" },
                { id: 7, name: "Max" },
            ],
            newMessageText: "input",
        }   
    },
    _rerenderEntireTree(){
        console.log("state changed");
    },
    getState() {
        return this._state;  
    },
    subcscribe(observer){
        this._rerenderEntireTree = observer;
    },
/*
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._rerenderEntireTree(this._state);
    },
    sendMessage(postMessage){
        let newMessage = {
            id: 5,
            message: postMessage,
        };
        this._state.dialogsPage.messageData.push(newMessage);
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
 */    
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
    }
}

export default store;
window.store = store;