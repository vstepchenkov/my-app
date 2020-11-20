

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
    users: [
        {
            id: 1, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0fP9cfQoXoNRig_q978BdQlKfRf-cDOKvQ&usqp=CAU",
            followed: false, fullName: "Dmitriy", status: "I am a boss", location: { city: "Minsk", country: "Belarus" }
        },
        {
            id: 2, photoURL: "https://static1.iod.media/storage/articles/covers/xl/1574232059_3644_3307b895f415ec3d.jpg",
            followed: false, fullName: "Anna", status: "I am a boss", location: { city: "London", country: "England" }
        },
        {
            id: 3, photoURL: "https://lumiere-a.akamaihd.net/v1/images/5cb3c849d5de240001a05880-image_c6729179.jpeg?region=0%2C0%2C1536%2C864&width=960",
            followed: true, fullName: "Igor", status: "I am a boss", location: { city: "Kiev", country: "Ukraine" }
        },
        {
            id: 4, photoURL: "data:image/jpeg;base64,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",
            followed: true, fullName: "Taras", status: "I am a boss", location: { city: "Lviv", country: "Ukraine" }
        },
    ],
}

const usersReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id===action.userId) {
                        return {...u, followed:true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id===action.userId) {
                        return {...u, followed:false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users:{...state.users, ...action.users}
            }
        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (userId) => ({type: SET_USERS, userId})

