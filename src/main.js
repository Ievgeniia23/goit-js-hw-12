`use strict`;

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import icon from './img/Group.svg';

import { searchData } from './js/pixabay-api';

import { createMarkup } from './js/render-functions';

const form = document.querySelector('form');
const gallery = document.querySelector('ul');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.btn')

loader.style.display = 'none';
loadBtn.style.display = 'none';

let page = 36;


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.elements.query.value.trim();

  gallery.innerHTML = '';

  loader.style.display = 'block';

  searchData(inputValue, page)
    .then(data => {
console.log(data);

      if (data.hits.length === 0) {
        iziToast.show({
          iconUrl: icon,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#ffffff',
          color: '#ef4040',
          close: true,
          position: 'topRight',
        });
      } else {
        gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
        const totalPages = Math.ceil(data.totalHits / 15);
        
        if (page <= totalPages) {
          loadBtn.style.display = 'block';
        } else {
loadBtn.style.display = 'none';

          //  iziToast.show({
          //    iconUrl: icon,
          //    message:
          //      'We're sorry, but you've reached the end of search results',
          //    messageColor: '#ffffff',
          //    color: '#ef4040',
          //    close: true,
          //    position: 'topRight',
          //  });
       }
            lightbox.refresh();
      }
    })

    .catch(error =>
      iziToast.show({
        iconUrl: icon,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#ffffff',
        color: '#ef4040',
        close: true,
        position: 'topRight',
      })
    )
    .finally(() => {
      loader.style.display = 'none';
    });

  form.reset();
}

