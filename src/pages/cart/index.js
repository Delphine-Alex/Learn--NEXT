import React, { useState, useEffect } from 'react';

import TitlePage from '../../components/TitlePage';

const Index = () => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        const value = JSON.parse(localStorage.getItem("cart"));
        //console.log(value);
        setValue(value);
    }, []);

    return (
        <div>
            <TitlePage title="Cart" />
            {value ?
                value.map((item) => {
                    return (
                        <p>{item.title}</p>
                    )
                }) : <p>Your cart is empty</p>}


        </div>
    );
}

export default Index;
