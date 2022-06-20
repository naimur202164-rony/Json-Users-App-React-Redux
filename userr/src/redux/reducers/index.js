import { combineReducers } from "redux";
import { commentsReducers, postsReducers, usersReducers,selectUsersReducers, selectUserCommentsReducers } from "./userReducer";




const reducers=combineReducers({
    allUsers:usersReducers,
    allPosts:postsReducers,
    allCommnets:commentsReducers,
    selectedUsers:selectUsersReducers,
    selectedComments:selectUserCommentsReducers,
})



export default reducers;