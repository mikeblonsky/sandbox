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
        .then(res => dispatch({ type: constants.actionType.ADD_USER, payload: res.data }))
    };
};