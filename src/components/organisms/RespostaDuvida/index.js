import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import ListOption from '../../molecules/ListOptions';
import NavBar from '../../molecules/NavBar'
import './index.css'
import {
    useLocation
} from "react-router-dom";

export const RespostaDuvida = (props) => {
    const location = useLocation()
    console.log(location)
    return (
        <div className='resposta-duvida-content'>
            <NavBar
                activeClassName="active-link"
                navArrow
                exact
            >
            </NavBar>
            <div className='resposta-duvida-header'>
                <GenericText color="gray" bold="bold">Dúvidas frequentes</GenericText>
            </div>
            <div className='resposta-duvida-body'>
                <GenericText size="subtitlebold">{location.state.props.title}</GenericText>
                <div className='resposta-duvida-body-subtitle'>
                    <GenericText color="gray" bold="bold">{location.state.props.subtitle}</GenericText>
                </div>
                <div className='resposta-duvida-body-text'>
                    {location.state.props.pode.map((pode, inx) => {
                        console.log(pode)
                        return (<div className='resposta-text'><GenericText color="gray" bold="bold">{pode}</GenericText></div>)

                    })}

                </div>
                {location.state.props.oupode.length === 0 ? '' :
                    <div>
                        <div className='resposta-duvida-body-subtitle'>
                            <GenericText color="gray" bold="bold">Ou também pode:</GenericText>
                        </div>
                        <div className='resposta-duvida-body-text'>
                            {location.state.props.oupode.map((oupode, inx) => {
                                return (
                                    <div className='resposta-text'><GenericText color="gray" bold="bold">{oupode}</GenericText></div>)
                            })}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default RespostaDuvida;
