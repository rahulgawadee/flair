// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist, fetchProducts } from '../actions/productActions';
import Pagination from './Pagination';
import './styles.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.data || []);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Adjust this value as needed

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h2>Product List</h2>
      <ul>
        {currentProducts.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            <button onClick={() => dispatch(addToWishlist(product))}>Add to Wishlist</button>
          </li>
        ))}
      </ul>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductList;
