import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Price from '../../../components/Price';
import TitlePage from '../../../components/TitlePage';
import Description from '../../../components/Description';


import productsService from '../../../services/products.service';

const Index = () => {
    const router = useRouter();

    const [products, setProducts] = useState(false);
    const { id } = router.query

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const result = await axios.get(`http://localhost:1337/api/products${id}`);
    //             setProducts(result.data)
    //         } catch (err) {
    //             err && console.error(err.message);
    //         }
    //     }
    //     getData()
    // }, [id]);

    useEffect(() => {
        const id = router.query.id;
        productsService.getProduct(id)
            .then((data) => {
                setProducts(data.data);
            })
            .catch(err => console.log(err))
    }, []);

    const addToCart = (products) => {
        const cartArray = [];
        const productToInsert = {
            quantity: 1,
            title: products.title,
            price: products.price,
            id: products.id,
            image: products.image
        };

        // Première étape : vérifier si il y a un élément dans le localstorage
        // 1er cas : si un ou des produit(s) sont dans le localstorage
        // console.log(localStorage.getItem("cart"));
        if (localStorage.getItem("cart")) {
            const localStorageCart = JSON.parse(localStorage.getItem("cart"));
            localStorageCart.forEach((product) => {
                cartArray.push(product);
            });

            const checkId = cartArray.findIndex((product) => product.id === productToInsert.id);
            if (checkId !== -1) {
                cartArray[checkId].quantity += 1;
            } else {
                cartArray.push(productToInsert);
            }

            // Il faut parser pour récupérer une chaîne de caractère // string
            console.log(cartArray);
            localStorage.setItem("cart", JSON.stringify(cartArray));

            // On récupère ces éléments, on les stock dans un nouveau tableau et on ajoute le nouvel élément dans le tableau
            // Réinsérer le tableau dans le localStorage

        } else {
            cartArray.push(productToInsert);
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
            {/* <p>{products.attributes.title}</p>
            <p>{products.attributes.description}</p> */}
            <Title title={products && products.attributes.title} />
            <Description description={products && products.attributes.description} />
            <Price price={products && products.attributes.price} currency="€" />
            <Button
                title="Add to card"
                type="button"
                classes="btn btn__volor-white"
                function={() => addToCart(products)}
            />
        </div>

    );
}

export default Index;
