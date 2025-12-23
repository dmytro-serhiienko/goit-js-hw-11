import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

console.log('Script loaded successfully');

const formEl = document.querySelector('.form');

console.log('Form element:', formEl);

formEl.addEventListener('submit', async event => {
  event.preventDefault();
  
  console.log('Form submitted');

  const query = event.target.elements['search-text'].value.trim();
  
  console.log('Search query:', query);

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    console.error('Error:', error);
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    event.target.reset();
  }
});
