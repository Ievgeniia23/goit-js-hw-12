`use strict`;

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import icon from './img/Group.svg';

import { fetchData } from './js/pixabay-api';

import { createMarkup } from './js/render-functions';

const form = document.querySelector('form');
const gallery = document.querySelector('ul');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.elements.query.value.trim();

  gallery.innerHTML = '';

  loader.style.display = 'block';

  fetchData(inputValue)
    .then(data => {
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
