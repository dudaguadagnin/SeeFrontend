import React from 'react'
import Check from '../../../../assets/check-gray.svg'
import CheckG from '../../../../assets/check-green.svg'
import CheckV from '../../../../assets/check-red.svg'
import './index.css'


export const Input = (props) => {

    return (
        <div className='input-content' >
            <input className='input' type={props.type} id={props.id} placeholder={props.children}></input>
        </div>
    );
}

export default Input;
