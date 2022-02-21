import React, { useState, useEffect } from 'react';

import Button from '../../components/Button';
import TitlePage from '../../components/TitlePage';

const Index = () => {
    const [value, setValue] = useState([]);

    const deleteCart = () => {
        localStorage.removeItem("cart");
        setValue(null);
    }

    useEffect(() => {
        const value = JSON.parse(localStorage.getItem("cart"));
        setValue(value);
    }, []);

    return (
        <div>
            <TitlePage title="Cart" />
            {value ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}€</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Button title="Remove cart" type="button" function={deleteCart} />
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}

        </div>
    );
};

export default Index;
