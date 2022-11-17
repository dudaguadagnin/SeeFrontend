import React from 'react';
import { Button } from "react-native"
import Hamb from '../../../../assets/frame.png'
import logo from '../../../../assets/logoText.png'
import Search from '../../../../assets/search.png'
import Seta from '../../../../assets/seta.png'
import CardSearch from '../../atoms/CardSearch/index.js'
import GenericText from '../../atoms/GenericText';
import './index.css'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom";

export const NavBar = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [newNavBarNormal, setnewNavBarNormal] = React.useState(true)
    const [newNavBarNormalOpen, setnewNavBarNormalOpen] = React.useState(false)
    const [filmes, setFilmes] = React.useState([])
    const [series, setSeries] = React.useState([])
    const [navArrow, setNavArrow] = React.useState(false)
    const midia = useSelector((state) => state.midia)
    let user = (useSelector((state) => state.login))

    console.log(user)

    const Toggle = () => {
        setnewNavBarNormalOpen(!newNavBarNormalOpen)
    }
    const TogglePesquisa = () => {
        setnewNavBarNormal(!newNavBarNormal)
    }

    React.useEffect(() => {
        const asyncFn = async () => {
            const res = await axios.get(`http://localhost:3000/filmes`);
            const ser = await axios.get(`http://localhost:3000/series`);
            setFilmes(res.data);
            setSeries(ser.data);
        }
        setNavArrow(props.navArrow)
        asyncFn();
    }, []);

    const [busca, setBusca] = React.useState('')


    const filmesFiltrados = Object.keys(midia.busca).filter((filme) => {
        return midia.busca[filme].title.toLowerCase().includes(busca.toLowerCase())
    })

    return (
        <div className='nav-bar'>
            {navArrow ?
                <div className='nav-bar-components'>
                    <div className="nav-button-toggle">
                        <img onClick={() => navigate(-1)} className='nav-hamb-arrow' src={Seta} />
                    </div>
                    <div className='nav-logo'>
                        <img className='nav-logo' src={logo} />
                    </div>
                    <div className='nav-search' >
                        <div className='nav-search-lupa'>
                            <img className='nav-search-img' src={Search} />
                        </div>
                    </div>
                </div>
                : newNavBarNormal ?
                    <div className='nav-bar-components'>
                        <div className="nav-button-toggle">
                            {newNavBarNormalOpen
                                ? <img onClick={Toggle} className='nav-hamb-arrow' src={Seta} />
                                : <img onClick={Toggle} className='nav-hamb' src={Hamb} />
                            }
                        </div>
                        <Link className="nav-ul-li nav-home" to="/Home" state={{ filmes: filmes, series: series }}>
                            <div className='nav-logo' >
                                <img className='nav-logo' src={logo} />
                            </div>
                        </Link>
                        <div className='nav-search' >
                            <div className='nav-search-lupa' onClick={TogglePesquisa}>
                                <img className='nav-search-img' src={Search} />
                            </div>
                        </div>
                    </div>
                    : <div className='nav-bar-components'>
                        <div className="nav-button-toggle">
                            <img onClick={TogglePesquisa} className='nav-hamb-arrow' src={Seta} />
                        </div>
                        <div className='nav-input-open'>
                            <input
                                className='nav-search-input'
                                placeholder="Pesquise aqui..."
                                type='text'
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                            />
                        </div>
                        <div className='nav-search' >
                            <div className='nav-search-lupa-open'>
                                <img className='nav-search-img' src={Search} />
                            </div>
                        </div>
                    </div>
            }

            {/* opçoes do menu */}
            <ul className={`menuNav ${newNavBarNormalOpen ? " showMenu" : ""}`}>
                {
                    !user.logado
                        ? <Link className="nav-ul-li" to="/Login">Login/Cadastro</Link>
                        : <Link className="nav-ul-li" to="/Favoritos">Favoritos</Link>
                        
                }
                <Link className="nav-ul-li" to="/Home" state={{ filmes: filmes, series: series }}>Inicial</Link>
                <Link className="nav-ul-li" to="/Filmes" state={{ genre: filmes, type: 'Filmes' }}>Filmes</Link>
                <Link className="nav-ul-li" to="/Series" state={{ genre: series, type: 'Séries' }}>Séries</Link>

                <Link className="nav-ul-li" to="/Duvidas">Dúvidas frequentes</Link>

                <ol className="nav-ol"> Gêneros
                    <Link className="nav-ol-li" to="/Acao" state={{ genre: midia.acao, type: 'Ação' }}>
                        Ação
                    </Link>
                    <Link className="nav-ol-li" to="/Aventura" state={{ genre: midia.aventura, type: 'Aventura' }}>
                        Aventura
                    </Link>
                    <Link className="nav-ol-li" to="/Comedia" state={{ genre: midia.comedia, type: 'Comédia' }}>
                        Comédia
                    </Link>
                    <Link className="nav-ol-li" to="/Drama" state={{ genre: midia.drama, type: 'Drama' }}>
                        Drama
                    </Link>
                    <Link className="nav-ol-li" to="/Espionagem" state={{ genre: midia.espionagem, type: 'Espionagem' }}>
                        Espionagem
                    </Link>
                    <Link className="nav-ol-li" to="/Fantasia" state={{ genre: midia.fantasia, type: 'Fantasia' }}>
                        Fantasia
                    </Link>
                    <Link className="nav-ol-li" to="/Ficcao" state={{ genre: midia.ficcao, type: 'Ficção científica' }}>
                        Ficção científica
                    </Link>
                    <Link className="nav-ol-li" to="/Guerra" state={{ genre: midia.guerra, type: 'Guerra' }}>
                        Guerra
                    </Link>
                    <Link className="nav-ol-li" to="/Romance" state={{ genre: midia.romance, type: 'Romance' }}>
                        Romance
                    </Link>
                    <Link className="nav-ol-li" to="/Suspense" state={{ genre: midia.suspense, type: 'Suspense' }}>
                        Suspense</Link>
                    <Link className="nav-ol-li" to="/Terror" state={{ genre: midia.terror, type: 'Terror' }}>
                        Terror
                    </Link>
                </ol>
            </ul>


            {/* busca */}
            {
                busca !== '' ?
                    <div className={`pesquisa-expand ${!newNavBarNormal ? " showModalPesquisa" : ""}`}>
                        {!newNavBarNormal ?
                            <div className="text-busca">
                                <img className="text-busca-img" src={Search} />
                                <GenericText size="subtitlebold">Resultados para: {busca}</GenericText>
                            </div>
                            : ''
                        }
                        <div className={` ${!newNavBarNormal ? " cards-pesquisa" : ""}`}>
                            {!newNavBarNormal ?
                                filmesFiltrados.map((filme) => (
                                    <CardSearch
                                        key={filme}
                                        item={midia.busca[filme]}
                                    ></CardSearch>
                                ))
                                : ''
                            }

                            {!newNavBarNormal ?
                                filmesFiltrados.length === 0
                                    ? <div className='pesquisa-sem-conteudo'>
                                        <GenericText color="white">Desculpe, não temos esse conteúdo em nossa plataforma.</GenericText>
                                    </div>
                                    : ''
                                : ''
                            }
                        </div>
                    </div>
                    : ''
            }
        </div >
    );
}
export default NavBar;
