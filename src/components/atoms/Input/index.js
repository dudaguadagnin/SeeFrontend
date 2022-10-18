import React from 'react'
import './index.css'


export const Input = (props) => {
    const teste = () => {
        console.log(document.getElementById("meu-i").value)
    }

    return (
        <div className='input-content' onClick={() => {teste()}}>
            
        </div>
    );
}

export default Input;
