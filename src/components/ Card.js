import React from 'react';

const Card = (product) => {
    return (
        <div key={product.id} className="product__card" className="product__card">
            <img src={product.image} alt="product" className='shop_image' />
            <p className='shop_title'>{product.title}</p>
            <p className='shop_price'>{product.price}</p>
            <button className='shop_button'>See product</button>
        </div>
    );
}

export default Card;
