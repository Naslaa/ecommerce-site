import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProductApi } from '../../apis/Api';


const ProductDetails = () => {


//get id from params
const {id} = useParams();

const[product, setProduct]=useState([]);

useEffect(()=>{
    getSingleProductApi(id).then((res)=>{
        setProduct(res.data);
    }).catch((err)=>{
        console.log(err);
    });
},[id]);






  return (
    <div className='container mt-5'>
    <div className="d-flex">
        <img className='object-cover rounded-3' height={'500px'} width={'600px'} src={product.image} alt="" />
        <div className='ms-3 mt-4'>
            <span className='fs-3 fw-bold'>
                {product.name}
            </span>
            
           <p className='fs-4'>
                 Price: NPR.{product.price}
           </p>
           <p className='fs-4'>
                 Category : {product.category}
           </p>
            <p className='fs-4'>
                Description : {product.description}
            </p>

            <button className='btn btn-primary'>Add to cart</button>

        </div>
    </div>
</div>
  )
}

export default ProductDetails