const SEND_MESSAGE="SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_-NEW-MESSAGE-TEXT";

let initialState = {
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

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messageData.push(newMessage);
            state.newMessageText = "";    
            return state;
        
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        
        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    }
}

        