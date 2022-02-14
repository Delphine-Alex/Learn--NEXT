import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Button from '../../../components/Button';
import Price from '../../../components/Price';
import TitlePage from '../../../components/TitlePage';

const Index = () => {
    const router = useRouter();

    const [products, setProducts] = useState(false);
    const { id } = router.query
    //const id = router.query.id

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProducts(result.data)
                console.log(result.data);
            } catch (err) {
                err && console.error(err.message);
            }
        }
        getData()
    }, [id]);


    const addToCart = (products) => {
        const cartArray = [];
        // Première étape : vérifier si il y a un élément dans le localstorage
        // 1er cas : si un ou des produit(s) sont dans le localstorage
        // console.log(localStorage.getItem("cart"));
        if (localStorage.getItem("cart")) {
            const localStorageCart = JSON.parse(localStorage.getItem("cart"));
            localStorageCart.forEach(product => {
                cartArray.push(product);
            });
            //cartArray.push(localStorage.getItem("cart"));
            // Il faut parser pour récupérer une chaîne de caractère // string
            //cartArray.push(JSON.parse(localStorage.getItem("cart")));
            //console.log(cartArray);
            console.log(cartArray);
            cartArray.push(products);
            console.log(cartArray);
            localStorage.setItem("cart", JSON.stringify(cartArray));

            // On récupère ces éléments, on les stock dans un nouveau tableau et on ajoute le nouvel élément dans le tableau
            // Réinsérer le tableau dans le localStorage

        } else {
            cartArray.push(products);
            //localStorage.setItem("cart", JSON.stringify(products));
            localStorage.setItem("cart", JSON.stringify(cartArray));
        }
    }



    return (

        <div key={products.id}>
            <TitlePage title="Product" />
            {/* <img src={products.image} />
            <p>{products.title}</p>
            <div></div>
            <p>{products.description}</p>
            <p>Price: £{products.price}</p>
            <p>Includes VAT. Shipping calculated at checkout</p>
            <button className='shop_button'>Add to cart</button> */}
            <Price price={products && products.price} currency="€" />
            <Button
                title="Add to card"
                type="button"
                classes="button"
                function={() => addToCart(products)}
            />
        </div>

    );
}

export default Index;
