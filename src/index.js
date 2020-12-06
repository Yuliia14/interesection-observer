import getRefs from './js/refs';
import { debounce } from 'lodash';
import './css/common.css';
import PhotosApiService from './js/apiService';
import renderImageCard from './js/renderImageCard';
import observer from './js/io';

const refs = getRefs();

const photosApiService = new PhotosApiService();
export default photosApiService;

refs.searchForm.addEventListener('input', debounce(onSearch, 1000));


function onSearch(e) {
photosApiService.query = e.target.value;
clearGalleryContainer();
photosApiService.resetPage();
if(photosApiService.query === ''){
  clearGalleryContainer();
} else {
  photosApiService.fetchAPI().then(renderImageCard);
}
}
  
  function clearGalleryContainer() {
    refs.galleryContainer.innerHTML = '';
  }