// Wishlist.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../actions/wishlistActions';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
