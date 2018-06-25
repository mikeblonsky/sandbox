import constans from "../utils/constans";
import axios from "axios";

// https://github.com/toddmotto/public-apis

// https://pokeapi.co/
// https://reqres.in/
// https://jsonplaceholder.typicode.com/
// https://randomuser.me/


export function fetchUsers(options) {
    const config = {
        number: 20, // res
        gender: "male", //?gender=male
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

