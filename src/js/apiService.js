import renderImageCard from './renderImageCard';
const BASE_URL = `https://pixabay.com/api/`;


export default class PhotosApiService {
  constructor() {
    this.searchQuery = '',
    this.page = 1
  }

  fetchAPI() {
    const searchParams = new URLSearchParams({
    q: this.searchQuery,
    page: this.page,
    per_page: 12,
    key: '19307770-0b075029944e7b654fbe75927'
    }); 

    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&${searchParams}`;
   
    return fetch(url)
            .then(response => response.json())
            .then(data => {
              this.page += 1;
            return data.hits;
            }
              )
            .catch(error => console.log(error));
  }
    
resetPage() {
  this.page = 1;
}

get query() {
  return this.searchQuery;
}

set query(newQuery) {
  this.searchQuery = newQuery;
}
}
