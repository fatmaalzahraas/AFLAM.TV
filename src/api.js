import axios from 'axios';
export const images = 'https://image.tmdb.org/t/p/'
export const API_KEY='e4997fa5c977c3bda84aaa43465c7a03'
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
export default instance;