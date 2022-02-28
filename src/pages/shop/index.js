import { useState, useEffect } from 'react';

import TitlePage from '../../components/TitlePage';
import Card from '../../components/Card';

import productsService from '../../services/products.service';

const Index = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsService.getProducts()
            .then((data) => {
                setProducts(data.data);
                console.log(data.data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="page__shop">
            <TitlePage title="Eshop" />
            <div className='shop_container'>
                {products.map((product) => {
                    return <Card {...product} key={product.id} />
                })}
            </div>
        </div>
    );
}

export default Index;
