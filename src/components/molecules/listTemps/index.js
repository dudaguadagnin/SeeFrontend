import React from 'react';
import CardImage from '../../atoms/CardImage';
import GenericText from '../../atoms/GenericText'
import Star from '../../atoms/Star'
import GenreIcon from '../../atoms/GenreIcon'
import CardSlider from '../Filmes/CardSliderFilmes'
import NavBar from '../../molecules/NavBar'
import Play from '../../../../assets/play.png'
import Arrow from '../../../../assets/arrow.png'
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
//import { useNavigation } from '@react-navigation/native';
import CardHorizontalSlider from '../../molecules/CardHorizontalSlider/index.js'
import Load from '../../atoms/Loader/index.js'

import './index.css'

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'white',
    },
    '& .MuiRating-iconHover': {
        color: 'white',
    },
});

export const ListTemps = (props) => {
    const [expandTemp, setexpandTemp] = React.useState(false)
    const toggleActiveClass = () => {
        setexpandTemp(!expandTemp)
    }

    let epipods = []

    return (
        <div className='list-temp-body'>
            <div className='list-temp'>
                <div className='list-temp-touch' onClick={() => toggleActiveClass()}>
                    <img src={Arrow} className={`list-temp-arrow ${expandTemp ? 'invert-arrow' : 'normal-arrow'}`} />
                    <span className='list-temp-texto' >Temporada {props.index + 1}</span>
                </div>
                <div className={`list-temp-cards ${expandTemp ? 'showTemp' : 'ocultoTemp'}`}>
                    {
                        props.midia.length
                        !== 0 ?
                        props.midia.map((mid, idx) => {
                            
                            mid.season === props.index + 1 
                            ? epipods.push(mid)
                            : ''
                        
                        })
                            : 
                            <div className='home-loading'>
          <Load />
          </div>

                    }
                    <CardHorizontalSlider midia={epipods} />
                </div>
            </div>
        </div>
    );
}

export default ListTemps;

