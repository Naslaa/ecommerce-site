import React, { useEffect } from 'react'
import { useState } from "react";
import { addProductApi, deleteProductApi, getAllProductApi } from '../../../apis/Api';

import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
const Admindashboard = () => {

    const [productImage, setproductImage] = useState(null);
    const [previewImage, setpreviewImage] = useState(null);
    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [productDescription, setproductDescription] = useState('');
    const [productCategory, setproductCategory] = useState('');

    //for response data
    const [products, setproducts] = useState([]);
    const handleImageupload = (event) => {

        setproductImage(event.target.files[0])

        const reader = new FileReader()
        reader.onload = () => {

            setpreviewImage(reader.result)
        }
        reader.readAsDataURL(event.target.files[0])

    }


    //handel asubmit
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productCategory', productCategory)
        formData.append('productDescription', productDescription)
        formData.append('productImage', productImage)

        addProductApi(formData).then(res => {
            toast.success("product added successfully")
        }).catch(err => {
            toast.error("product add failed!")
        })

    }

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("are you sure you you want to delete?")
        if (confirmDelete) {
            deleteProductApi(id).then(res => {
                toast.success("product deleted successfully")
            }).catch(err=>{
                toast.error("product deleted failed")
            })
        }
    }

    useEffect(() => {
        getAllProductApi().then(res => {
            setproducts(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    return (
        <>
            <div className='container mt-2'>
                <div className='d-flex justify-content-between'>
                    <h3> Admin Dashboard</h3>

                    <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                        Add Product
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action=''>
                                        <div class="mb-3" >
                                            <label htmlFor=''> Product name</label>
                                            <input
                                                onChange={(e) => setproductName(e.target.value)}
                                                type='text' class="form-control" placeholder='enter product name' />

                                            <label className='mt-2' htmlFor=''> Product Price</label>
                                            <input
                                                onChange={(e) => setproductPrice(e.target.value)}

                                                type='text' class="form-control" placeholder='enter product price' />

                                            <label className='mt-2' htmlFor=''> Product Category</label>
                                            <input
                                                onChange={(e) => setproductCategory(e.target.value)}

                                                type='text' class="form-control" placeholder='enter product category' />

                                            <label className='mt-2' htmlFor=''> Product description</label>
                                            <input
                                                onChange={(e) => setproductDescription(e.target.value)}

                                                type='text' class="form-control" placeholder='enter product description' rows='4' />

                                            <label className='mt-2' htmlFor=''> Product Image</label>
                                            <input
                                                onChange={handleImageupload}
                                                type='file' class="form-control" placeholder='enter product image' />
                                            {
                                                previewImage && <img src={previewImage} alt="" className='object-cover rounded-3 mt-2' height={'300px'} width={'100%'} />
                                            }
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary"
                                        onClick={handleSubmit}
                                    >Add </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col"> Product Images</th>
                            <th scope="col"> Product Name</th>
                            <th scope="col"> Product price</th>
                            <th scope="col"> Product category</th>
                            <th scope="col"> Description</th>
                            <th scope="col"> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                return (
                                    <tr>
                                        <td>
                                            <img src={product.image} height={75} width={75}
                                            ></img>
                                        </td>
                                        <td> {product.name}</td>
                                        <td> {product.price}</td>
                                        <td> {product.category}</td>
                                        <td> {product.description}</td>
                                        <td>


                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <Link to={'/admin/product/edit/${product._id'} type="button" class="btn btn-success m-1">edit</Link>
                                                <button type="button" class="btn btn-danger m-1" onClick={() => handleDelete(product._id)}>delete</button>
                                            </div>
                                        </td>



                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Admindashboard