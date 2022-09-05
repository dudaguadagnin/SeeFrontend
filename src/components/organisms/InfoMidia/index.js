import React from 'react';
import CardImage from '../../atoms/CardImage';
import GenericText from '../../atoms/GenericText'
import Star from '../../atoms/Star'
import GenreIcon from '../../atoms/GenreIcon'
import CardSlider from '../../molecules/CardSlider'
import NavBar from '../../molecules/NavBar'
import Play from '../../../../assets/play.png'
import Arrow from '../../../../assets/arrow.png'
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { useNavigation } from '@react-navigation/native';
import CardHorizontalSlider from '../../molecules/CardHorizontalSlider/index.js'

import './index.css'

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'white',
    },
    '& .MuiRating-iconHover': {
        color: 'white',
    },
});

export const InfoMidia = (props) => {
    console.log(props)
    const filmes = [
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
    ]
    const series = [
        {
            title: 'serie titulo',
            duration: '2h, 30min',
            cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74'
        },
        {
            title: 'serie titulo',
            duration: '2h, 30min',
            cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQtwsxsHgdgWIND4fSpPITza0IkQHiqZDXdeVicRWtG9JhFAws01znsKfW8XeqW_2WWBmJpqpnmdN9b7uOy3ePJ2P0Rb30PJsTNGWkXTV0aFZDawHX8kIN3Z.jpg?r=cc9'
        },
        {
            title: 'serie titulo',
            duration: '2h, 30min',
            cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfvDB1xGZuh-SkB7WccIvvvpGTvyOaoYqtePmpAV3pfCbB01RJbg2srq_yIL9UXu-tvyPH9oHIPbiXRfUsL8P7d7LLHxwZeSGpen3Bwyw7gCzFO0XYaBPOku.jpg?r=8da'
        }
    ]

    const sinopseDescription = "Agente Oculto segue Gentry, um dos melhores e mais letais mercenários da CIA - que ninguém sabe a real identidade. Ele embarca em uma missão pela Europa para resgatar seu contratante, Sir Donald Fitzroy, e sua família, de Lloyd, membro de uma gigantesca corporação francesa e ex-oficial da CIA. Porém, o mercenário acaba descobrindo segredos bem sujos da agência e Loyd, por sua vez coloca uma recompensa pela cabeça de Gentry, afim de que seja morto, para que ele consiga roubar um bilhão de dólares de um acordo de negócios petrolíferos na Nigéria. Se isso já não fosse o suficiente, o presidente do país, por sua vez, também quer Gentry morto pelo assassinato de seu irmão. Lloyd força Fitzroy a trair Gentry mantendo sua família refém em um castelo na Normandia. Baseado no romance homônimo de Mark Greaney."
    const [expandTemp, setexpandTemp] = React.useState(false)
    const navigation = useNavigation();
    return (
        <div className='InfoMidia'>
            <NavBar
                to={'Player'}
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
            ></NavBar>
            <div className='info-header'>
                <div><CardImage size="small" cartaz="https://upload.wikimedia.org/wikipedia/pt/f/f1/Minions_2-_The_Rise_of_Gru_poster.jpeg" /></div>
                <div className="info-header-inicial-info">
                    <GenericText size="large">Agente Oculto</GenericText>
                    <div className='info-avalitate inf-flex'>
                        <div className='info-header-avaliate inf-flex'>
                            <div className='info-header-avaliate'>
                                <Star size="pequena" />
                            </div>
                            <GenericText size="small" className="info-avaliate-padd">4.5</GenericText>
                        </div>
                        <div className='info-header-genre'>
                            <GenreIcon />
                        </div>
                    </div>
                    {props.temporadas ?
                        <div className='info-header-text inf-flex'>
                            <div className='info-header-text-padd'>
                                <GenericText size="small">Temporadas:</GenericText>
                            </div>
                            <GenericText size="small" color="gray">4</GenericText>
                        </div>
                        :
                        <div className='info-header-text inf-flex'>
                            <div className='info-header-text-padd'>
                                <GenericText size="small">Duração:</GenericText>
                            </div>
                            <GenericText size="small" color="gray">2h, 30min</GenericText>
                        </div>
                    }
                    <div className='info-header-text inf-flex'>
                        <div className='info-header-text-padd'>
                            <GenericText size="small">Ano:</GenericText>
                        </div>
                        <GenericText size="small" color="gray">2021</GenericText>
                    </div>
                    <div className='info-header-text inf-flex'>
                        <div className='info-header-text-padd'>
                            <GenericText size="small">Classificação:</GenericText>
                        </div>
                        <GenericText size="small" color="gray">+14</GenericText>
                    </div>
                    <div className='info-header-button' onClick={() => navigation.navigate('Player')}>
                        <img className='info-play-button' src={Play} />
                        <span className='info-header-assistir'>Assistir agora</span>
                    </div>

                </div>
            </div>
            <div className='info-sinopse'>
                <GenericText>Sinopse:</GenericText>
                <div className='info-sinopse-description'>
                    <GenericText color="gray">{sinopseDescription}</GenericText>
                </div>
            </div>
            {!props.temporadas ?
                <div className='info-temporada-body'>
                    <div className='info-temporada'>
                        <div  className='info-temporada-touch'>
                            <img src={Arrow} className='info-temporada-arrow' />
                            <span className='info-temporada-texto' >Temporada 1</span>
                        </div>
                        <div className={`info-temporada-cards ${expandTemp ? 'showTemp' : 'ocultoTemp'}`}>
                            <CardHorizontalSlider midia={series} />
                        </div>
                    </div>
                </div>
                :
                ''
            }
            <div className='info-footer'>
                <GenericText>Também pode gostar de:</GenericText>
                <div className='info-footer-cards'>
                    <div className='info-footer-cards-carrossel'><CardSlider midia={filmes} /></div>
                    <CardSlider midia={filmes} />
                </div>
            </div>
        </div >
    );
}

export default InfoMidia;
/*
<Button
          title="Add some friends"
          onPress={() =>
            props.navigation.navigate('Player')
          }
        />

*/
