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
const loadBtn = document.querySelector('.btn');

loader.style.display = 'none';
loadBtn.style.display = 'none';

let page = 1;
let totalPages = 0;
let inputValue = '';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});

loadBtn.addEventListener('click', loadMore);
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
      event.preventDefault();
      // inputValue = form.elements.query.value.trim();
      inputValue = event.currentTarget.elements.query.value.trim();
  gallery.innerHTML = '';
   
  loader.style.display = 'block';
  await new Promise(resolve => setTimeout(resolve, 2000));
      
      try {
      const data = await searchData(inputValue, page);
       
      if (data.hits.length === 0) {
        loadBtn.style.display = 'none';

        iziToast.show({
        iconUrl: icon,
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#ffffff',
        color: '#ef4040',
        close: true,
        position: 'topRight',
          });
      } else {
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      totalPages = Math.ceil(data.totalHits / 15);
        
      if (page < totalPages) {
        loadBtn.style.display = 'block';
      } else {
        loadBtn.style.display = 'none';

        iziToast.show({
        iconUrl: icon,
        message: 'We are sorry, but you have reached the end of search results',
        messageColor: '#ffffff',
        color: '#ef4040',
        close: true,
        position: 'topRight',
        });
          }
             lightbox.refresh();
        }
      } catch(error) {
        iziToast.show({
        iconUrl: icon,
        message: 'Please try again!',
        messageColor: '#ffffff',
        color: '#ef4040',
        close: true,
        position: 'topRight',
        });
    } finally {
          loader.style.display = 'none';
          }
    form.reset();
}
async function loadMore() {
    page += 1;
    try {
    loader.style.display = 'block';   
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const data = await searchData(inputValue, page);
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      if (page >= totalPages) {
      
        loadBtn.style.display = 'none';

        iziToast.show({
        iconUrl: icon,
         message: 'We are sorry, but you have reached the end of search results',
         messageColor: '#ffffff',
        color: '#ef4040',
        close: true,
         position: 'topRight',
        });
    } else {
         
      const card = document.querySelector('.gallery-item');
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({
      top: cardHeight * 2,
      left: 0,
      behavior: 'smooth',
      });
    }
    } catch (error) {
    alert(error.message);
    }  finally {
    loader.style.display = 'none';
  }
lightbox.refresh();
}


 