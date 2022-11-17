import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import './index.css'
import GenericTitle from '../../atoms/GenericTitle/index.js';
import NavInfo from '../../molecules/NavInfo/index.js';
import GenericLink from '../../atoms/GenericLink/index.js';
import Load from '../../atoms/Loader/index.js'
import CardSearch from '../../atoms/CardSearch/index.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Favoritos = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [Err, setErr] = React.useState(false)
    const [Loading, setLoading] = React.useState(false)
    const [Favorito, setFavoritos] = React.useState(
        [
            {
                id:1,
                title:'Star Wars: Uma Nova Esperança (Episódio IV)',
                description:'A princesa Leia é mantida refém pelas forças im',
                genre_id:7,
                parental_rating:'Livre',
                duration:'2h 1m',
                year:1977,
                image:'https://ingresso-a.akamaihd.net/prd/img/movie/star-wars-episodio-v-o-imperio-contra-ataca/01ba303b-3544-45e8-87bf-fb6547f27216.jpg',
            },
            {
                id:2,
                title:'Star Wars: Uma Nova Esperança (Episódio IV)',
                description:'A princesa Leia é mantida refém pelas forças im',
                genre_id:7,
                parental_rating:'Livre',
                duration:'2h 1m',
                year:1977,
                image:'https://ingresso-a.akamaihd.net/prd/img/movie/star-wars-episodio-v-o-imperio-contra-ataca/01ba303b-3544-45e8-87bf-fb6547f27216.jpg',
            },
            {
                id:2,
                title:'Star Wars: Uma Nova Esperança (Episódio IV)',
                description:'A princesa Leia é mantida refém pelas forças im',
                genre_id:7,
                parental_rating:'Livre',
                duration:'2h 1m',
                year:1977,
                image:'https://ingresso-a.akamaihd.net/prd/img/movie/star-wars-episodio-v-o-imperio-contra-ataca/01ba303b-3544-45e8-87bf-fb6547f27216.jpg',
            },
            {
                id:2,
                title:'Star Wars: Uma Nova Esperança (Episódio IV)',
                description:'A princesa Leia é mantida refém pelas forças im',
                genre_id:7,
                parental_rating:'Livre',
                duration:'2h 1m',
                year:1977,
                image:'https://ingresso-a.akamaihd.net/prd/img/movie/star-wars-episodio-v-o-imperio-contra-ataca/01ba303b-3544-45e8-87bf-fb6547f27216.jpg',
            }
        ]
    )

    React.useEffect(() => {
        const Favoritos = () => {

        axios.get(`http://localhost:3000/minhaLista`, {
        })
            .then((res) => {
                console.log(res)
                setFavoritos(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setErr(err)
            })
    }
    Favoritos()
  }, [])

    return (
        <div className='favoritos'>
            {Loading === true
                ? Err === true
                    ? <Erro />
                    : <div className='favoritos-loading'>
                        <Load />
                    </div>
                : <div>
                    <NavInfo>Favoritos</NavInfo>
                    <div className='favoritos-content'>
                        <div className="favoritos-card">
                            {Favorito.length === 0 ?
                                <GenericText color="white">Você ainda não favoritou nenhum conteúdo</GenericText>
                                : Favorito.map((filme, i) => (
                                    <CardSearch
                                        key={i}
                                        item={filme}
                                    ></CardSearch>
                                ))
                            }

                        </div>
                    </div>
                </div>
            }
        </div>

    );
}

export default Favoritos;
