import React from 'react';

const Input = (props) => {
    return (
        <div className='form__group'>
            <label htmlFor={props.label}>{props.label}</label>
            <input type={props.type} placeholder={props.title} className={props.classes} id={props.id} onChange={props.handleChange} required={props.required} />
        </div>
    );
}

export default Input;
