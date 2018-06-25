import constans from "../utils/constans"

export function fetchReqres(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_REQRES:
            return action.payload
        default:
            return state;
    }
}