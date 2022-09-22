import React from 'react';
import GenericText from '../../atoms/GenericText';
import Seta from '../../../../assets/arrow.png'
import './index.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

export const ListOption = (props) => {
    console.log(props)
    return (
        <div className='list-option-content'>
            <div>
                <Link to="/Resposta" className='list-option' state={props}>
                <GenericText size="subtitlebold" color="gray">{props.children}</GenericText>
                <img src={Seta} className="list-option-arrow"/>
                </Link>
            </div>
        </div>
    );
}
export default ListOption;
