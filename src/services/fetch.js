import axios from 'axios';
const API_KEY = '20862553-c35088a0b719e32f9c665779e';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

const fetchImages = (query, page) => {
  const perPage = 12;
  const url = `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${API_KEY}`;
  return axios.get(url).then(({ data }) => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    return data.hits;
  });
};

export default fetchImages;
