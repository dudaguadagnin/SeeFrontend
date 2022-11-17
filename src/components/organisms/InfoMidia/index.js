import React from 'react';
import CardImage from '../../atoms/CardImage';
import GenericText from '../../atoms/GenericText'
import GenreIcon from '../../atoms/GenreIcon'
import CardSlider from '../../molecules/CardSlider'
import NavBar from '../../molecules/NavBar'
import Play from '../../../../assets/play.png'
import Arrow from '../../../../assets/arrow.png'
import addfavorit from '../../../../assets/addfavorit.svg'
import favorit from '../../../../assets/favorit.svg'
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import ListTemps from '../../molecules/listTemps';
import {
    useLocation,
    Link,
    useNavigate
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
    const [generos, setGeneros] = React.useState('')
    const [temporadas, setTemporadas] = React.useState([])
    const [expandedSinopse, setExpandedSinopse] = React.useState(false)
    const [adicionado, setadicionado] = React.useState(false)
    const navigate = useNavigate();
    const toggleActiveClass = () => {
        setExpandedSinopse(!expandedSinopse)
    }
    const sinopseDescription = "Agente Oculto segue Gentry, um dos melhores e mais letais mercenários da CIA - que ninguém sabe a real identidade. Ele embarca em uma missão pela Europa para resgatar seu contratante, Sir Donald Fitzroy, e sua família, de Lloyd, membro de uma gigantesca corporação francesa e ex-oficial da CIA. Porém, o mercenário acaba descobrindo segredos bem sujos da agência e Loyd, por sua vez coloca uma recompensa pela cabeça de Gentry, afim de que seja morto, para que ele consiga roubar um bilhão de dólares de um acordo de negócios petrolíferos na Nigéria. Se isso já não fosse o suficiente, o presidente do país, por sua vez, também quer Gentry morto pelo assassinato de seu irmão. Lloyd força Fitzroy a trair Gentry mantendo sua família refém em um castelo na Normandia. Baseado no romance homônimo de Mark Greaney."
    //const navigation = useNavigation();
    const location = useLocation()
    const midia = useSelector((state) => state.midia)
    const user = useSelector((state) => state.login)

    const asyncFn = async (id) => {
        await Promise.all([
            axios.get(`http://localhost:3000/episodios/${id}`)
        ])
            .then((res) => {
                setTemporadas(res[0].data)
            })
    }

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
    let seasonquantity = []
    for (let i = 0; i < location.state.props.season_quantity; i++) {
        seasonquantity.push(i)
    }

    const AddFavoritos = () => {
        if (user.logado) {
            axios.post(`http://localhost:3000/insertObjectInMineList`, {
                user_id: user.user_id,
                title: location.state.props.title,
                description: location.state.props.description,
                genre_id: location.state.props.genre_id,
                duration: location.state.props.duration,
                year: location.state.props.year,
                image: location.state.props.image,
                parental_rating: location.state.props.parental_rating,
            })
                .then((res) => {
                    console.log(res)
                    setadicionado(true)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            navigate('/Login', { replace: true })
        }
    }

    return (
        <div className='InfoMidia'>
            <NavBar
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
            ></NavBar>
            <div className='info-type'><GenericText color="gray">Informações</GenericText></div>

            <div className='info-header'>
                <div><CardImage size="small" cartaz={location.state.props.image} /></div>

                <div className="info-header-inicial-info">
                    <GenericText size="large">{location.state.props.title}</GenericText>
                    <div className='info-avalitate inf-flex'>
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
                    {location.state.props.season_quantity ? ''
                        :
                        <Link className="info-link-assistir" to={user.logado ? "/Player": '/Login'} state={location.state.props.title}>
                            <div className='info-header-button'>
                                <img className='info-play-button' src={Play} />
                                <span className='info-header-assistir'>Assistir agora</span>
                            </div>
                        </Link>
                    }
                </div>
            </div>
            {/** favoritar */}
            <div className='info-favoritos' onClick={() => AddFavoritos()}>
                {
                    adicionado
                        ? <img className='info-favoritos-img' src={favorit} />
                        : <img className='info-favoritos-img' src={addfavorit} />
                }
                <GenericText>Adicionar aos favoritos</GenericText>
            </div>

            {/* sinopse */}
            <div className='info-sinopse'>
                <GenericText>Sinopse:</GenericText>
                {
                    location.state.props.description.length > 200
                        ?
                        <div>
                            <div className={`info-sinopse-description-large ${expandedSinopse ? 'info-sinopse-expanded' : 'info-sinopse-compressed'}`}>
                                <GenericText color="gray">{location.state.props.description}</GenericText>
                            </div>
                            <div className='info-sinopse-ler'>
                                {
                                    !expandedSinopse
                                        ? <div className='info-sinopse-ler-mais'
                                            onClick={() => toggleActiveClass()}>
                                            <img src={Arrow} className='info-sinopse-arrow-ler' />
                                            <GenericText>Ler mais</GenericText>
                                        </div>
                                        : <div className='info-sinopse-ler-menos'
                                            onClick={() => toggleActiveClass()}>
                                            <img src={Arrow} className='info-sinopse-arrow-ler-menos' />
                                            <GenericText>Ler menos</GenericText>
                                        </div>
                                }
                            </div>
                        </div>
                        : <div className='info-sinopse-description'>
                            <GenericText color="gray">{location.state.props.description}</GenericText>
                        </div>
                }

            </div>

            {/* temporadas */}
            {location.state.props.season_quantity ?
                seasonquantity.map((serie, idxex) => {
                    return (
                        <div onClick={() => asyncFn(location.state.props.id)}>
                            <ListTemps index={idxex} midia={temporadas} />
                        </div>
                    )
                })
                : ''
            }
            {/* <div className='info-avaliate'>
                <GenericText>Gostou do filme? Deixe sua avaliação:</GenericText>
                <div className='info-avaliate-stars'>
                    <StyledRating
                        name="customized-color"
                        defaultValue={2}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<Star fontSize="inherit" />}
                        emptyIcon={<Star color="white" />}
                    />
                </div>
            </div> */}
            <div className='Info-write-comment'></div>

            {/* sugestoes de midias */}
            <div className='info-footer'>
                {
                    midia.filmes.length === 0
                        ? ''
                        : <div>
                            <div className='info-footer-text'>
                                <GenericText>Também pode gostar de:</GenericText>
                            </div>
                            <div className='info-footer-cards'>
                                <div className='info-footer-cards-carrossel'>
                                    {
                                        midia.filmes.map((ser, inx) => {

                                            return <CardSlider midia={ser[0]} />
                                        })
                                    }

                                </div>
                                <div className='info-footer-cards-carrossel'>
                                    {
                                        midia.filmes.map((ser, inx) => {

                                            return <CardSlider midia={ser[1]} />
                                        })
                                    }

                                </div>

                            </div>
                        </div>
                }
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
