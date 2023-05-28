import axios from 'axios';

const Api = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-type':'multipart/form-data',
    },
});


const config={
    headers:{
        'authorization': `Bearer ${localStorage.getItem('token')}`,
    }
}

//creating route
export const testApi=() => Api.get('/');

export const registerApi = (data) => Api.post('/api/user/register', data);

export const loginApi = (data) => Api.post('/api/user/login', data);




export const addProductApi = (data) => Api.post('/api/product/add', data, config);


export const getAllProductApi = () => Api.get('/api/product/get_products');

export const getSingleProductApi = (id) => Api.get(`/api/product/get_product/${id}`);

export const updateProductApi = (id,data) => Api.put(`/api/product/update_product/${id}`,data, config);

export const deleteProductApi = (id) => Api.delete(`/api/product/delete_product/${id}`, config);





