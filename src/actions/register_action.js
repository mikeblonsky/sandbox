import axios from "axios";
import constans from "../utils/constans";

export const addUser = (data) => {
    return function(dispatch) {
        axios.post("http://localhost:3000/api/addUser", data, { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(data => dispatch({ 
            type: constans.actionType.ADD_USER,
            payload: data 
        }))
    };
};
// console.log("fetchSports 00000000000000");
// export function fetchSports() {
//     console.log("fetchSports 1111111111");
//     return function(dispatch) {
//         axios.get("http://localhost:3000/api/sports/all")
//         .then(data => {
//             console.log("ACTION_FETCH_SPORTS", data);
//             return dispatch({ 
//                 type: constans.actionType.FETCH_SPORTS,
//                 payload: data
//             })
//         })
//     };
// }
console.log(11111111111111);
export function xxx() {
    console.log(22222222222222222222);
    const request = axios.get("http://localhost:3000/api/sports/all").then(request => request.data);
    console.log("ACTION_FETCH_SPORTS", request);
    return {
        type: constans.actionType.FETCH_SPORTS,
        payload: request
    }
}