import { ActionTypes } from "../constants/action-type"


export const setUsers=(users)=>{
    return{
        type:ActionTypes.SET_USERS,
        payload:users
    }
   
};


export const setPosts=(posts)=>{
    return{
        type:ActionTypes.SET_POSTS,
        payload:posts
    }
}


export const setComments=(comments)=>{
    return{
        type:ActionTypes.SET_COMMENTS,
        payload:comments,
    }
}

export const setSelectedUsers=(selectedUsers)=>{
    return{
        type:ActionTypes.SELECTED_USERS,
        payload:selectedUsers,
    }
}

export const setSelectedComments=(selectedCommnets)=>{
    return{
        type:ActionTypes.SELECTED_COMMENTS,
        payload:selectedCommnets,
    }
}