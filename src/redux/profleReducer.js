const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postsData: [
        { id: 1, message: "Hi. It's me.", likeCount: 15 },
        { id: 2, message: "Where are you.", likeCount: 20 },
        { id: 3, message: "Call me plz.", likeCount: 7 },
        { id: 4, message: "Sorry.", likeCount: 1 },
    ],
    newPostText: "input"    
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = "";  
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
  return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
    }
}
