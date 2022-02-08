import { useState, useEffect } from 'react';
import axios from 'axios';

import TitlePage from '../../components/TitlePage';
import Card from '../../components/Card';

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
                    return <Card {...product} key={product.id} />
                })}
            </div>
        </div>
    );
}

export default Index;
