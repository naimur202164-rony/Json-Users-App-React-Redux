import { ActionTypes } from "../constants/action-type"

const initialState={
    users:[],
    posts:[],
    comments:[],
    userSlected:[{}],
    commentSelected:[{}]
   

}


export const usersReducers=(state=initialState,{type,payload})=>{

    switch(type){
        case ActionTypes.SET_USERS:
            return {...state, users:payload};
            default:
            return state;
    }





}


export const postsReducers=(state=initialState,{type,payload})=>{
        switch(type){
            case ActionTypes.SET_POSTS:
                return { posts:payload};
                default:
            return state;
        }
}

export const commentsReducers=(state=initialState,{type,payload})=>{
            switch(type){
                case ActionTypes.SET_COMMENTS:
                    return {...state, comments:payload};

                    default :
                    return state;
            }
}



export const  selectUsersReducers=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_USERS:
            return {...state,userSlected:payload};
            default :
            return state;
    }
}

export const selectUserCommentsReducers=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_COMMENTS:
            return {...state,commentSelected:payload};

            default :
            return state;
        
    }
};
// When Geting single details

// export const  selectUsersReducers=(state={},{type,payload})=>{
//     switch(type){
//         case ActionTypes.SELECTED_USERS:
//             return {...state,...payload};
//             default :
//             return state;
//     }
// }
