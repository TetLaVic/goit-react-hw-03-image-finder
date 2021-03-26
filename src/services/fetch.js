import axios from 'axios';
const API_KEY = '0862553-c35088a0b719e32f9c665779e';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 12;
  }

  fetchImages() {
    const url = `?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`;

    return axios
      .get(url)
      .then(response => console.log(response))
      .then(({ hits }) => {
        console.log({ hits });
        this.page += 1;
        return hits;
      });
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }

  resetPage() {
    this.page = 1;
  }
}
