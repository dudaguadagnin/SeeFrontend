import React from 'react';
import logo from '../../../../assets/logoText.png'
import Search from '../../../../assets/search.png'
import ArrowRigth from '../../../../assets/arrowRigth.png'
import CardSearch from '../../atoms/CardSearch/index.js'
import GenericText from '../../atoms/GenericText';
import './index.css'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {
    useNavigate
} from "react-router-dom";

export const NavInfo = (props) => {
    const navigate = useNavigate();

    return (
        <div className='nav-info-bar'>
            <div className='nav-info-bar-components'>
                <div className="nav-info-button-toggle">
                    <img onClick={() => navigate(-1)} className='nav-info-hamb-arrow' src={ArrowRigth} />
                </div>
                <div className='nav-info-logo'>
                    <span>{props.children}</span>
                </div>
                <div></div>
            </div>
        </div >
    );
}
export default NavInfo;
