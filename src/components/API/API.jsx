import axios from 'axios';

const API_KEY = 'f31e3eddb8b7eb3d84e2156a52b41937';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const trendingMovieToday = () => {
  return axios.get(`/trending/movie/day?api_key=${API_KEY}`);
};

export const getSerchByQuery = query => {
  return axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
};

export const getSerchById = id => {
  return axios.get(`movie/${id}?api_key=${API_KEY}`);
};
