import React from 'react'

function Product({product}) {
    const {name, email, address } = product;
  return (
    <div>
        <h1>Nmae: {name}</h1>
        <p>Email: {email}</p>
        <p>Address: {address}</p>

    </div>
  )
}

export default Product