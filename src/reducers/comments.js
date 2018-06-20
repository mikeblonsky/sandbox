import constans from "../utils/constans"

export function fetchComments(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_COMMENTS:
            return action.payload
        default:
            return state;
    }
}