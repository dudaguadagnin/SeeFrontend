import React from 'react'
import './index.css'


export const GenericTitle = (props) => {
    console.log(props)
    //type = h1, h2, h3, h4
    return (
        <div className={`generic-title-${props.color} generic-title-${props.bold}`}>
            {
            props.type === undefined ? <h1 className='generic-title' >{props.children}</h1>
            : <props.type className='generic-title'>{props.children}</props.type>
            }
        </div>
    );
}

export default GenericTitle;
