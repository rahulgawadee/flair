// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import ProductList from './components/ProductList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux Shopping App</h1>
      <ProductList />
    </div>
  );
};

export default App;
