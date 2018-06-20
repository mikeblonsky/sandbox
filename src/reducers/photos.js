import constans from "../utils/constans"

export function fetchPhotos(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_PHOTOS:
            return action.payload
        default:
            return state;
    }
}