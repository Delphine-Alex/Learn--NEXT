import { useState, useEffect } from 'react';
import axios from 'axios';

import TitlePage from '../../components/TitlePage';

const Index = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('https://fakestoreapi.com/products');
            setProducts(result.data);
            console.log(result.data);
        }
        getData();
    }, []);

    return (
        <div className="page__shop">
            <TitlePage title="Eshop" />
            <div className='shop_container'>
                {products.map((product) => {
                    return (
                        <div key={product.id} className="product__card">
                            <img src={product.image} alt="product" className='shop_image' />
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Index;
