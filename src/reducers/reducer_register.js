import constans from "../utils/constans";

// export function fetchSports(state = [], action) {
  //     switch (action.type) {
    //       case constans.actionType.FETCH_SPORTS:
    //         return [...action.payload];
    //       default:
    //         return state;
    //     }
    //   }
    
    
export function xxx(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_SPORTS:
            return action.payload
        default:
            return state;
    }
}