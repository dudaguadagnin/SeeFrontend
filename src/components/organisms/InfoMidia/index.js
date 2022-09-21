import React from 'react';
import CardImage from '../../atoms/CardImage';
import GenericText from '../../atoms/GenericText'
import Star from '../../atoms/Star'
import GenreIcon from '../../atoms/GenreIcon'
import CardSlider from '../../molecules/Filmes/CardSliderFilmes'
import NavBar from '../../molecules/NavBar'
import Play from '../../../../assets/play.png'
import Arrow from '../../../../assets/arrow.png'
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
//import { useNavigation } from '@react-navigation/native';
import CardHorizontalSlider from '../../molecules/CardHorizontalSlider/index.js'
import ListTemps from '../../molecules/listTemps';
import {
    useLocation,
    Link
} from "react-router-dom";

import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'white',
    },
    '& .MuiRating-iconHover': {
        color: 'white',
    },
});

const converteStringEmInteiro = (dados) => {
    return Number(dados)
}

export const InfoMidia = (props) => {
    const filmes = [
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            image: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            image: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            image: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            image: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
            title: 'Filme titulo',
            description: 'é um filme bacana',
            genre: 'Ação',
            evaluation: '4.5',
            duration: '2h, 30min',
            year: 2020,
            image: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
    ]
    const tempsss = [
        [
            {
                title: 'serie 1',
                duration: '2h, 30min',
                cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
            },
            {
                title: 'serie 2',
                duration: '2h, 30min',
                cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
            },
            {
                title: 'serie 3',
                duration: '2h, 30min',
                cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
            }
        ],
        [
            {
                title: 'serie 1',
                duration: '2h, 30min',
                cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
            },
            {
                title: 'serie 2',
                duration: '2h, 30min',
                cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
            },
            {
                title: 'serie 3',
                duration: '2h, 30min',
                cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
            }
        ],
    ]
    const [generos, setGeneros] = React.useState('')
    const [temporadas, setTemporadas] = React.useState([])
    const [testes, setTeste] = React.useState([])

    const sinopseDescription = "Agente Oculto segue Gentry, um dos melhores e mais letais mercenários da CIA - que ninguém sabe a real identidade. Ele embarca em uma missão pela Europa para resgatar seu contratante, Sir Donald Fitzroy, e sua família, de Lloyd, membro de uma gigantesca corporação francesa e ex-oficial da CIA. Porém, o mercenário acaba descobrindo segredos bem sujos da agência e Loyd, por sua vez coloca uma recompensa pela cabeça de Gentry, afim de que seja morto, para que ele consiga roubar um bilhão de dólares de um acordo de negócios petrolíferos na Nigéria. Se isso já não fosse o suficiente, o presidente do país, por sua vez, também quer Gentry morto pelo assassinato de seu irmão. Lloyd força Fitzroy a trair Gentry mantendo sua família refém em um castelo na Normandia. Baseado no romance homônimo de Mark Greaney."
    //const navigation = useNavigation();
    const location = useLocation()
    const midia = useSelector((state) => state.midia)
    console.log(midia.episodios)
    console.log(location)
    let tamanhodetemporada = []

    const asyncFn = async (id) => {
        console.log('clicks')
        await Promise.all([
            axios.get(`http://localhost:3000/episodios/${id}`)
        ])
            .then((res) => {
                console.log(res[0].data)
                setTemporadas(res[0].data)
            })
    }


    // npx react-native start
    // yarn android
    React.useEffect(() => {

        if (location.state.props.genre_id === 1) {
            setGeneros('Ação')
        }
        if (location.state.props.genre_id === 2) {
            setGeneros('Aventura')
        }
        if (location.state.props.genre_id === 3) {
            setGeneros('comedia')
        }
        if (location.state.props.genre_id === 4) {
            setGeneros('drama')
        }
        if (location.state.props.genre_id === 5) {
            setGeneros('espionagem')
        }
        if (location.state.props.genre_id === 6) {
            setGeneros('fantasia')
        }
        if (location.state.props.genre_id === 7) {
            setGeneros('ficcao')
        }
        if (location.state.props.genre_id === 8) {
            setGeneros('guerra')
        }
        if (location.state.props.genre_id === 9) {
            setGeneros('romance')
        }
        if (location.state.props.genre_id === 10) {
            setGeneros('suspense')
        }
        if (location.state.props.genre_id === 11) {
            setGeneros('terror')
        }
    })
    let teste = []
    for (let i = 0; i < location.state.props.season_quantity; i++) {
        teste.push(i)
    }
    console.log(temporadas)

    // console.log(location)
    return (
        <div className='InfoMidia'>
            <NavBar
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
            ></NavBar>
            <div className='info-header'>
                <div><CardImage size="small" cartaz={location.state.props.image} /></div>
                <div className="info-header-inicial-info">
                    <GenericText size="large">{location.state.props.title}</GenericText>
                    <div className='info-avalitate inf-flex'>
                        <div className='info-header-avaliate inf-flex'>
                            <GenericText size="small" className="info-avaliate-padd">{location.state.props.evaluation}</GenericText>
                        </div>
                        <div className='info-header-genre'>
                            <GenreIcon >{generos}</GenreIcon>
                        </div>
                    </div>
                    {location.state.props.season_quantity ?
                        <div className='info-header-text inf-flex'>
                            <div className='info-header-text-padd'>
                                <GenericText size="small">Temporadas:</GenericText>
                            </div>
                            <GenericText size="small" color="gray">{location.state.props.season_quantity}</GenericText>
                        </div>
                        :
                        <div className='info-header-text inf-flex'>
                            <div className='info-header-text-padd'>
                                <GenericText size="small">Duração:</GenericText>
                            </div>
                            <GenericText size="small" color="gray">{location.state.props.duration}</GenericText>
                        </div>
                    }
                    <div className='info-header-text inf-flex'>
                        <div className='info-header-text-padd'>
                            <GenericText size="small">Ano:</GenericText>
                        </div>
                        <GenericText size="small" color="gray">{location.state.props.year}</GenericText>
                    </div>
                    <div className='info-header-text inf-flex'>
                        <div className='info-header-text-padd'>
                            <GenericText size="small">Classificação:</GenericText>
                        </div>
                        <GenericText size="small" color="gray">+14</GenericText>
                    </div>
                    <Link className="info-link-assistir" to="/Player" state={location.state.props.title}>
                        <div className='info-header-button'>
                            <img className='info-play-button' src={Play} />
                            <span className='info-header-assistir'>Assistir agora</span>
                        </div>
                    </Link>


                </div>
            </div>
            <div className='info-sinopse'>
                <GenericText>Sinopse:</GenericText>
                <div className='info-sinopse-description'>
                    <GenericText color="gray">{location.state.props.description}</GenericText>
                </div>
            </div>
            {location.state.props.season_quantity ?

                teste.map((serie, idxex) => {
                    console.log(temporadas)
                    return (
                        <div onClick={() => asyncFn(location.state.props.id)}>
                            <ListTemps index={idxex} midia={temporadas} />
                        </div>
                    )
                })

                :
                ''
            }
            <div className='info-footer'>
                <div className='info-footer-text'>
                    <GenericText>Também pode gostar de:</GenericText>
                </div>
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
