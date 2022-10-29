import React from 'react';
import GenericText from '../../atoms/GenericText';
import Pipocs from '../../../../assets/pipoca.png'
import Seta from '../../../../assets/seta.png'
import {
    useLocation,
    Link
} from "react-router-dom";
import './index.css'

export const Error = (props) => {
    return (
        <div className='error-content'>
            <div className='error-arrow'>
                <Link style={{ padding: '19px 18px 0px' }} to="/Home">
                    <img style={{ width: '25px', height: '25px' }} src={Seta} />
                </Link>
            </div>
            <div className='error'>

                <div className='error-top border-red'>
                    <GenericText>Parece que o estagiário desenrolou a fita de vídeo!!!</GenericText>
                </div>
                <GenericText>Tente novamente mais tarde!</GenericText>
                <img src={Pipocs} className="error-image" />
                <GenericText>Aproveite para assistir outro incrível título da nossa plataforma. </GenericText>
                <GenericText>Sentimos muito, estamos trabalhando para resolver o problema!</GenericText>
            </div>
        </div>
    );
}

export default Error;
