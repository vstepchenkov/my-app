let rerenderEntireTree = () => {
    console.log("state changed");
}

let state = {
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
        ]
    }   
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const sendMessage = (postMessage) => {
    let newMessage = {
        id: 5,
        message: postMessage,
    };
    state.dialogsPage.messageData.push(newMessage);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subcscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;