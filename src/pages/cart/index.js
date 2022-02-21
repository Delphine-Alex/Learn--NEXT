import React, { useState, useEffect } from 'react';

import Button from '../../components/Button';
import TitlePage from '../../components/TitlePage';

const Index = () => {
    const [value, setValue] = useState([]);

    const deleteCart = () => {
        localStorage.removeItem("cart");
        setValue(null);
    }

    const removeOne = (product) => {
        const checkId = value.findIndex((el) => el.id === product.id);

        if (checkId !== -1 && value[checkId].quantity > 1) {
            value[checkId].quantity -= 1;
        }
        localStorage.setItem(("cart"), JSON.stringify(value));
        setValue(JSON.parse(localStorage.getItem('cart')));
    };

    const addOne = (product) => {
        const checkId = value.findIndex((el) => el.id === product.id);

        if (checkId !== -1) {
            value[checkId].quantity += 1;
        }
        localStorage.setItem("cart", JSON.stringify(value));
        setValue(JSON.parse(localStorage.getItem('cart')));
    }

    const deleteProduct = (product) => {
        const filteredCart = value.filter((item) => item.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(filteredCart));
        setValue(filteredCart)
    };

    const initialValue = 0;
    const sumWithInitial = value.reduce(
        (total, product) => total + product.quantity * product.price,
        initialValue
    );

    const totalQuantity = value.reduce(
        (total, product) => total + product.quantity,
        initialValue
    );



    useEffect(() => {
        setValue(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    return (
        <div>
            <TitlePage title="Cart" />
            {value ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}€</td>

                                    <td>
                                        <Button type="button" function={removeOne} title="-" />
                                        {item.quantity}
                                        <Button type="button" function={addOne} title="+" />
                                    </td>

                                    <td>{(item.price * item.quantity).toFixed(2)}€</td>

                                    <td onClick={deleteProduct}>x</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p>Total : {sumWithInitial}€, quantity: {totalQuantity}</p>
                    <Button title="Remove cart" type="button" function={deleteCart} />
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}

        </div>
    );
};

export default Index;
