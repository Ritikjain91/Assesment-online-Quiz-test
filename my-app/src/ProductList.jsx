// src/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>
              {item.title}
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
            </Link>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
