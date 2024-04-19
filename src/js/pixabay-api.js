`use strict`;

import axios from 'axios';

const API_KEY = '43279373-50d6c66b7fce6ad9a5efd1552';

export const searchData = async(inputValue, page) => {
  const params = new URLSearchParams({
    key: API_KEY,
    page: page,
    per_page: 15,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
   const response = await axios.get(`https://pixabay.com/api/?${params}`);
   return response.data;
};
