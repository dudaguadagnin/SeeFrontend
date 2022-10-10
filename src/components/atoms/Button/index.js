import React from 'react'
import './index.css'


export const Button = (props) => {

    return (
        <div className='button-content'>
            <button className='button-large'>{props.children}</button>
        </div>
    );
}

export default Button;
