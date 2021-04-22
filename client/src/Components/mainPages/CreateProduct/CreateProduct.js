import React, {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {GlobalState} from '../../../GlobalState';
import './createProducts.css'

const initialState = {
    product_id: '',
    title: '',
    price: '',
    description: '',
    _id: ''
}

function CreateProduct() {

    const state = useContext(GlobalState)

    const [product, setProduct] = useState(initialState);
    const [isAdmin] = state.userAPI.isAdmin;
    const [token] = state.token;

    const param = useParams();

    const [products] = state.productAPI.products;
    const [onEdit, setOnEdit] = useState(false);
    const [callback, setCallback] = state.productAPI.callback;

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            products.forEach(product => {
                if(product._id === param.id) {
                    setProduct(product)   
                }
            })
        } else {
            setOnEdit(false)
            setProduct(initialState)
        }
    }, [param.id, products])

    const onChangeInput = (e) => {
        const {name, value} = e.target;

        setProduct({...product, [name]:value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {

            if(!isAdmin) return alert("You're not an Admin")
            
            if(onEdit){
                await axios.put(`/api/update/${product._id}`, {...product}, {
                    headers: {Authorization: token}
                })
            } else {
                await axios.post('/api/add', {...product}, {
                    headers: {Authorization: token}
                })
            }

            setCallback(!callback)

            window.location.href = '/soon'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="create_product">
            <form onSubmit={onSubmit}>
                
                <h1>{ onEdit ? 'Update Product' : 'Create Product' }</h1>
                
                <div className="row">
                    <label htmlFor="product_id">Product_ID</label>
                    <input type="text" name="product_id" id="product_id" value={product.product_id} onChange={onChangeInput} disabled={onEdit} required />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={product.title} onChange={onChangeInput} required />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" value={product.price} onChange={onChangeInput} required />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows="5" value={product.description} onChange={onChangeInput} required />
                </div>

                <button type="submit">{ onEdit ? 'Update' : 'Create' }</button>

            </form>
        </div>
    )
}

export default CreateProduct