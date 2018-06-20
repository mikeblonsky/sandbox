import constans from "../utils/constans"

export function fetchPosts(state=null, action) {
    console.log("REDUCER fetchPosts =>", action.payload);
    switch(action.type) {
        case constans.actionType.FETCH_POSTS:
            return action.payload
        default:
            return state;
    }
}