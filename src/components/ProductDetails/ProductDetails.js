import React,{useEffect, useState} from 'react';
import {getProductId} from '../../ApiService/api';
import {Link, useParams} from  'react-router-dom';
import './ProductDetails.css';
function ProductDetails(){

const [productDetails, setProductDetails] = useState({});


const {id} = useParams();
useEffect(()=>{

const fetchProductDetails = async()=>{
    const data= await getProductId(id)

    setProductDetails(data);
}


fetchProductDetails()
},[id])

const handleBuyNow = ()=>{
    window.confirm("The product is out of stock!")
}


    return(
        <div className="product-details-container">
        <img src={productDetails.image} alt="imge" className="product-image"/>
        <div className="product-info">
        <h3 className="product-title">{productDetails.title}</h3>

        <p className="product-description">
        {productDetails.description}
        </p>
        <p className="product-price">
            {productDetails.price}
        </p>

        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
        <Link to="/"><button className="go-back-home-button">Go back Home</button></Link>
        
        </div>
           
        </div>
    )
}


export default ProductDetails