import constans from "../utils/constans"

export function fetchComments(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_COMMENTS:
            return action.payload
        default:
            return state;
    }
}

export function fetchPersons(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_PERSONS:
            return action.payload
        default:
            return state;
    }
}

export function fetchPhotos(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_PHOTOS:
            return action.payload
        default:
            return state;
    }
}

export function fetchPokemon(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_POKEMON:
            return action.payload
        default:
            return state;
    }
}

export function fetchPosts(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_POSTS:
            return action.payload
        default:
            return state;
    }
}

export function fetchReqres(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_REQRES:
            return action.payload
        default:
            return state;
    }
}

export function fetchUsers(state=null, action) {
    switch(action.type) {
        case constans.actionType.FETCH_USERS:
            return action.payload
        default:
            return state;
    }
}

export function xxx(state=null, action) {
    console.log("REDUCER", action.payload);
      switch(action.type) {
          case constans.actionType.FETCH_SPORTS:
              return action.payload
          default:
              return state;
      }
  }