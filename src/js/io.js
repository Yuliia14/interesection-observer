
import getRefs from './refs';
import photosApiService from '../index';
import renderImageCard from './renderImageCard';

const refs = getRefs();

const onEntry = entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting && photosApiService.query.length > 0) {
        console.log (`пора грузить следующие фото`);
        photosApiService.fetchAPI().then(renderImageCard);
      }
    })
  }

  const options = {
      rootMargin: '500px'
  };

  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(refs.interSection);

  export default observer;