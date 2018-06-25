import constans from "../utils/constans"

export function fetchPersons(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_PERSONS:
            return action.payload
        default:
            return state;
    }
}