import React, {useState} from 'react';
import axios from 'axios';
import BtnRender from './BtnRender';
import Loading from '../Loading/Loading';
import './productItems.css'

const ProductItems = ({ product, token, callback, setCallback }) => {

    const [loading, setLoading] = useState(false);

    const deleteProduct = async () => {
        try {
            
            const deleteProduct = await axios.delete(`/api/delete/${product._id}`, {
                headers: {Authorization: token}
            })

            await deleteProduct
            setLoading(false)
            setCallback(!callback)

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    if(loading) return <div className="product_card"><Loading /></div>

    return (
        <div className="product_card">
            <div className="product_box">
                <h1 title={product.title}>{product.title}</h1>
                <hr/>
                <span>{product.price}</span>
                <hr/>
                <p>{product.description}</p>

                <BtnRender product={product} deleteProduct={deleteProduct} />
            </div>
        </div>
    )
}

export default ProductItems
