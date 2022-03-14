import React from 'react';

import Link from 'next/link';

const Card = (product) => {
    return (
        <div className="product__card">
            {/* <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt={product.attributes.title} className='shop_image' /> */}
            <p className='shop_title'>{product.attributes.title}</p>
            <p className='shop_price'>{product.attributes.price} €</p>
            <button className='btn__color-black'>
                <Link href={`/shop/${product.id}`}>
                    <a>See product</a>
                </Link>
            </button>
        </div>
    );
}

export default Card;
