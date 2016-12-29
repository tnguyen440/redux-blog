import * as types from './actionTypes';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123gdfdfgdfgdfg';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: types.FETCH_POSTS,
        payload: request
    };
}

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: types.CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: types.FETCH_POST,
        payload: request
    }
}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: types.DELETE_POST,
        payload: request
    }
}