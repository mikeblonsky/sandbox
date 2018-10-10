import constans from "../utils/constans";
import axios from "axios";

// https://github.com/toddmotto/public-apis

// https://pokeapi.co/
// https://reqres.in/
// https://jsonplaceholder.typicode.com/
// https://randomuser.me/


export function fetchUsers(options) {
    const config = {
        number: 2, // res
        gender: "female", //?gender=male
        nat: "br", //?nat=gb AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NL, NZ, TR, US
        ...options
    }
    
    const request = axios.get(`https://randomuser.me/api/?results=${config.number}&gender=${config.gender}&nat=${config.nat}`).then(request => request.data.results);
    // if (callback) {
    //     console.log("JEST CALLBACK ACTION");
    // }
    return {
        type: constans.actionType.FETCH_USERS,
        payload: request
    }
}

export function fetchPosts() {
    const request = axios.get("https://jsonplaceholder.typicode.com/posts").then(request => request.data);
    return {
        type: constans.actionType.FETCH_POSTS,
        payload: request
    }
}

export function fetchComments() {
    const request = axios.get("https://jsonplaceholder.typicode.com/comments").then(request => request.data);
    console.log("1111", axios.get("https://jsonplaceholder.typicode.com/comments").then(r => r))
    return {
        type: constans.actionType.FETCH_COMMENTS,
        payload: request
    }
}

export function fetchPhotos() {
    const request = axios.get("https://jsonplaceholder.typicode.com/photos").then(request => request.data);
    return {
        type: constans.actionType.FETCH_PHOTOS,
        payload: request
    }
}

export function fetchPersons() {
    const request = axios.get("https://swapi.co/api/people/").then(request => request.data.results);
    return {
        type: constans.actionType.FETCH_PERSONS,
        payload: request
    }
}

export function fetchReqres() {
    const request = axios.get("https://reqres.in/api/users/").then(request =>  request.data.data);
    return {
        type: constans.actionType.FETCH_REQRES,
        payload: request
    }
}

export function fetchPokemon() {
    const request = axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=50").then(request =>  request.data.results);
    return {
        type: constans.actionType.FETCH_POKEMON,
        payload: request
    }
}

export function addSport(data) {
    console.log("ACTION DATA", data, data.productImage[0]);
    const newDate = {
        ...data,
        productImage: {
            ...data.productImage[0],
            path: data.productImage[0].name
        }
    }
    console.log("NEWWWWWW", newDate);
    const request = axios.post("http://localhost:3000/api/sports/add", newDate).then(request => {
        console.log("ADD ACTION", request.data);
        return request.data
    });
    
    return {
        type: constans.actionType.FETCH_SPORTS,
        payload: request
    }
}

export function xxx() {
    const request = axios.get("http://localhost:3000/api/sports/all").then(request => {
        return request.data
    });
    
    return {
        type: constans.actionType.FETCH_SPORTS,
        payload: request
    }
}
export function updateSport(id, data) {
    const request = axios.put(`http://localhost:3000/api/sports/update/${id}`, data);
    
    request.then(request => {
        return request.data
    });

    return {
        type: constans.actionType.UPDATE_SPORT,
        payload: request
    }
}

export function removeSport(id, callback) {
    const request = axios.delete(`http://localhost:3000/api/sports/delete/${id}`);
    
    request.then(request => {
        if (callback) {
            callback(request.data);
        }
        return request.data
    });

    return {
        type: constans.actionType.UPDATE_SPORT,
        payload: request
    }
}