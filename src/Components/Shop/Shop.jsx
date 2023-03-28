import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    addToDb(product.id)

  }
  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    for (const id in storedCart) {
      const savedProducts = products.find(product => product.id === id)
      console.log(savedProducts);
      if (savedProducts) {
        
        const quantity = storedCart[id];
        savedProducts.quantity = quantity;
        savedCart.push(savedProducts);
      }
      console.log(savedProducts);
    }
    setCart(savedCart)
  }, [products])
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