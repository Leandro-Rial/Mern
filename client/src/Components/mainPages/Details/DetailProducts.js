import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {GlobalState} from '../../../GlobalState';
import './detail.css'

const DetailProducts = () => {

    const params = useParams()
    const state = useContext(GlobalState);
    const [products] = state.productAPI.products;
    const [detailProduct, setDetailProduct] = useState([]);

    useEffect(() => {
        if(params.id){
            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    }, [params.id, products])

    if(detailProduct.length === 0) return null

    return (
        <>
            <div className="detail">
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        <h6>#ID:&nbsp;{detailProduct.product_id}</h6>
                    </div>
                    <hr/>
                    <span>$ {detailProduct.price}</span>
                    <hr/>
                    <p>{detailProduct.description}</p>
                </div>
            </div>  
        </>
    )
}

export default DetailProducts
