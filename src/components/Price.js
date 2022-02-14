import React from 'react';

const Price = (props) => {
    return (
        <div className="product__price">
            {props.price} {props.currency}
        </div>
    );
}

export default Price;
