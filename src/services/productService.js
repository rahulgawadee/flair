// src/actions/productActions.js
import axios from 'axios';

export const setProducts = (data) => ({
  type: 'SET_PRODUCTS',
  payload: data,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};
