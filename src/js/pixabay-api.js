`use strict`;

const API_KEY = '43279373-50d6c66b7fce6ad9a5efd1552';

export const fetchData = inputValue => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};
