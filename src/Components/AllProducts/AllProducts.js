import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = (props) => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div className='mt-5 container'>
            <h1 className='fs-1 fw-bolder'>Our Latest Collection</h1>
{/*             {
                products.map(product=>console.log(product))
            } */}

           <div className="row gx-5 gy-5">
           {
                products.map(product=><Product key={product.id} product={product} shoppingCart={props.shoppingCart} decreaseCount={props.decreaseCount}></Product>)
            }
           </div>
        </div>
    );
};

export default AllProducts;