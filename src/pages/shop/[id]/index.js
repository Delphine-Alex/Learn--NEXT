import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Price from '../../../components/Price';
import TitlePage from '../../../components/TitlePage';
import Description from '../../../components/Description';


import productsService from '../../../services/products.service';

const Index = () => {
    const router = useRouter();

    const [products, setProducts] = useState(false);

    useEffect(() => {
        if (!router.isReady) return;
        const id = router.query.id;
        productsService.getProduct(id)
            .then((data) => {
                setProducts(data.data);
                console.log(data.data);
            })
            .catch(err => console.log(err))
    }, [router.isReady]);

    const addToCart = (element) => {

        // On crée un nouvel objet avec une nouvelle quantité
        const productToInsert = {
            id: element.id,
            image: element.image,
            title: element.title,
            price: element.price,
            quantity: 1,
        };

        const cartArray = [];

        // Première étape : vérifier si il y a un élément dans le localstorage
        // 1er cas : si un ou des produit(s) sont dans le localstorage
        if (localStorage.getItem("cart")) {
            const localStorageCart = JSON.parse(localStorage.getItem("cart"));
            localStorageCart.forEach((product) => {
                cartArray.push(product);
            });

            const checkId = cartArray.findIndex((el) => el.id === element.id);
            if (checkId !== -1) {
                cartArray[checkId].quantity += 1;
            } else {
                cartArray.push(productToInsert);
            }

            // Il faut parser pour récupérer une chaîne de caractère // string
            localStorage.setItem("cart", JSON.stringify(cartArray));

        } else {
            cartArray.push(productToInsert);
            localStorage.setItem("cart", JSON.stringify(cartArray));
        }
    };

    return (

        <div key={products.id}>
            <TitlePage title="Product" />
            <Title title={products && products.attributes.title} />
            <Description description={products && products.attributes.description} />
            <Price price={products && products.attributes.price} currency="€" />
            <Button
                type="button"
                title="Add to card"
                classes="btn btn__volor-white"
                function={() => addToCart(products)}
            />
        </div>

    );
}

export default Index;
