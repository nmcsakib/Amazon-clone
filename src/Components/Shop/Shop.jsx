import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    fetch('products.json').then(res => res.json()).then(data => setProducts(data))
  }, [])
  const addToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart);

  }
    return (
        <div className='products'>
        <div className='products-container'>  
          {
            products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
          }
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;