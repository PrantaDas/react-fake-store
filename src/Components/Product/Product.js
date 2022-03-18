import React from 'react';
import DetailsModal from '../DetailsModal/DetailsModal';
import './Product.css'
// import DetailsModal from '../DetailsModal/DetailsModal'
const Product = (props) => {
    console.log(props.product);
    const{title,price,description,category,image,rating}=props.product;
    return (
        <div data-aos="flip-left" className='col-lg-4 product'>
            <div className="card p-2 border">
                <div className='w-50 m-auto'>
                    <img className='img-fluid' src={image} alt="" />
                </div>
            <h1>{title.slice(0,10)}</h1>
            <div className='d-flex justify-content-around'>
            <button onClick={props.shoppingCart} className='btn-primary'>Add to cart</button>
            {/* <button className='btn-primary'>Details</button> */}
            
            <DetailsModal product={props.product}></DetailsModal>
            <button onClick={props.decreaseCount} className='btn-danger'>Delete</button>
            </div>
            </div>
        </div>
    );
};

export default Product;