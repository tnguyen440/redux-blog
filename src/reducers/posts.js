import * as types from '../actions/actionTypes';
const INTIAL_STATE = {
    all: [],
    post: null
};

export default function(state = INTIAL_STATE, action) {
    switch(action.type) {
        case types.FETCH_POSTS:
            return { ...state, all: action.payload.data };
        case types.FETCH_POST:
            return {...state, post: action.payload.data};    
        default:
            return state;
    }
};