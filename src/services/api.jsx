import axios from "axios";

const API_KEY = 'fd259374d08dd7caa37fd18f75ea0779';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
const resp = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return resp.data;
}

export const fetchSearching = async query => {
const resp = await axios.get(`/search/movie?query=${query}&api_key=${API_KEY}`);
  return resp.data;
}

export const fetchDetails = async movie_id => {
  const resp = await axios.get(`/movie/${movie_id}}?api_key=${API_KEY}`)
  return resp.data;
}

export const fetchCast = async movie_id => {
  const resp = await axios.get(`/movie/${movie_id}}/credits?api_key=${API_KEY}`)
  return resp.data;
}

export const fetchReviews = async movie_id => {
  const resp = await axios.get(`/movie/${movie_id}}/reviews?api_key=${API_KEY}`)
  return resp.data;
}