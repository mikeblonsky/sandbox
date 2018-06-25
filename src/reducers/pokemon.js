import constans from "../utils/constans"

export function fetchPokemon(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_POKEMON:
            return action.payload
        default:
            return state;
    }
}