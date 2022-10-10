import React from 'react'
import './index.css'


export const Input = (props) => {

    return (
        <div className='input-content'>
            <input className='input' type={props.type} placeholder={props.children}></input>
        </div>
    );
}

export default Input;
