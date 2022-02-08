import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Index = () => {
    const router = useRouter();

    const [products, setProducts] = useState(false);
    const { id } = router.query

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProducts(result.data)
            console.log(result.data);
        }
        getData();
    }, [id]);

    return (

        <div key={products.id}>
            <img src={products.image} />
            <p>{products.title}</p>
            <div></div>
            <p>{products.description}</p>
            <p>Price: £{products.price}</p>
            <p>Includes VAT. Shipping calculated at checkout</p>
            <div className=''>
                <p className=''
                // onClick={removeOne}
                >-</p>
                {/* <p>{itemInfo.quantity}</p> */}
                <p className=''
                // onClick={addOne}
                >+</p>
            </div>
        </div>

    );
}

export default Index;
