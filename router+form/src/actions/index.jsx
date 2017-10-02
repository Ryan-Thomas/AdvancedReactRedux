import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=ryanthomas'

export function fetchPosts() {
  console.log('ROOT_URL', ROOT_URL)
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}