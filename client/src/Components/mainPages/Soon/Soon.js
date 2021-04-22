import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState';
import Loading from '../Utils/Loading/Loading';
import ProductItems from '../Utils/ProductItems/ProductItems';
import './soon.css';

const Soon = () => {

    const state = useContext(GlobalState);
    const token = state.token;
    const [products] = state.productAPI.products;
    const [callback, setCallback] = state.productAPI.callback;

    return (
        <div className="page_products">
            <div className="products">
                {
                    products.map(product => {
                        return (
                            <ProductItems key={product._id} product={product} token={token} callback={callback} setCallback={setCallback} />
                        )
                    })
                }
            </div>
            {products.length === 0 && <Loading />}
        </div>
    )
}

export default Soon
