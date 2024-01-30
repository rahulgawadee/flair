// src/reducers/productsReducer.js
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
