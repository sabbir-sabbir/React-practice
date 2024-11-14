import React, { useEffect, useState } from 'react'
import Product from './Product';

function Products() {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        fetch("Fakedta.json");
        .then(res => res.json())
        .then(data =>  setProducts(data))
    }, [])
  return (
    <>
      {
       products.map(product => <Product 
        key={product.id}
         product = {product}
       >
       </Product>) 
      }
    </>
  )
}

export default Products