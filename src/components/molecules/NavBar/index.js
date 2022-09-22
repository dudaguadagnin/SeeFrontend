import React from 'react';
import { Button } from "react-native"
import Hamb from '../../../../assets/frame.png'
import logo from '../../../../assets/logoText.png'
import Search from '../../../../assets/search.png'
import Seta from '../../../../assets/seta.png'
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

    const acao = []
    const aventura = []
    const comedia = []
    const drama = []
    const espionagem = []
    const fantasia = []
    const ficcao = []
    const guerra = []
    const romance = []
    const suspense = []
    const terror = []


    filmes.map((film, inx) => {
        console
        if (film.genre_id === 1) {
            acao.push(film)
        }
        if (film.genre_id === 2) {
            aventura.push(film)
        }
        if (film.genre_id === 3) {
            comedia.push(film)
        }
        if (film.genre_id === 4) {
            drama.push(film)
        }
        if (film.genre_id === 5) {
            espionagem.push(film)
        }
        if (film.genre_id === 6) {
            fantasia.push(film)
        }
        if (film.genre_id === 7) {
            ficcao.push(film)
        }
        if (film.genre_id === 8) {
            guerra.push(film)
        }
        if (film.genre_id === 9) {
            romance.push(film)
        }
        if (film.genre_id === 10) {
            suspense.push(film)
        }
        if (film.genre_id === 11) {
            terror.push(film)
        }
    })

    return (
        <div className='nav-bar'>
            { navArrow ?
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
                            {newNavBarNormalOpen ?
                                <img onClick={Toggle} className='nav-hamb-arrow' src={Seta} />
                                :
                                <img onClick={Toggle} className='nav-hamb' src={Hamb} />
                            }
                        </div>
                        <div className='nav-logo'>
                            <img className='nav-logo' src={logo} />
                        </div>
                        <div className='nav-search' >
                            <div className='nav-search-lupa' onClick={TogglePesquisa}>
                                <img className='nav-search-img' src={Search} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='nav-bar-components'>
                        <div className="nav-button-toggle">
                            <img onClick={TogglePesquisa} className='nav-hamb-arrow' src={Seta} />
                        </div>
                        <div className='nav-input-open'>
                            <input type="text" className='nav-search-input' placeholder="Pesquise aqui..." />
                        </div>
                        <div className='nav-search' >
                            <div className='nav-search-lupa-open'>
                                <img className='nav-search-img' src={Search} />
                            </div>
                        </div>
                    </div>
             }
            <ul className={`menuNav ${newNavBarNormalOpen ? " showMenu" : ""}`}>
                <Link className="nav-ul-li" to="/Home" state={{ filmes: filmes, series: series }}>Inicial</Link>
                <Link className="nav-ul-li" to="/Filmes" state={{ genre: filmes, type: 'Filmes' }}>Filmes</Link>
                <Link className="nav-ul-li" to="/Series" state={{ genre: series, type: 'Séries' }}>Séries</Link>
                <ol className="nav-ol"> Gêneros
                    <Link className="nav-ol-li" to="/Acao" state={{ genre: acao, type: 'Ação' }}>
                        Ação
                    </Link>
                    <Link className="nav-ol-li" to="/Aventura" state={{ genre: aventura, type: 'Aventura' }}>
                        Aventura
                    </Link>
                    <Link className="nav-ol-li" to="/Comedia" state={{ genre: comedia, type: 'Comédia' }}>
                        Comédia
                    </Link>
                    <Link className="nav-ol-li" to="/Drama" state={{ genre: drama, type: 'Drama' }}>
                        Drama
                    </Link>
                    <Link className="nav-ol-li" to="/Espionagem" state={{ genre: espionagem, type: 'Espionagem' }}>
                        Espionagem
                    </Link>
                    <Link className="nav-ol-li" to="/Fantasia" state={{ genre: fantasia, type: 'Fantasia' }}>
                        Fantasia
                    </Link>
                    <Link className="nav-ol-li" to="/Ficcao" state={{ genre: ficcao, type: 'Ficção científica' }}>
                        Ficção científica
                    </Link>
                    <Link className="nav-ol-li" to="/Guerra" state={{ genre: guerra, type: 'Guerra' }}>
                        Guerra
                    </Link>
                    <Link className="nav-ol-li" to="/Romance" state={{ genre: romance, type: 'Romance' }}>
                        Romance
                    </Link>
                    <Link className="nav-ol-li" to="/Suspense" state={{ genre: suspense, type: 'Suspense' }}>
                        Suspense</Link>
                    <Link className="nav-ol-li" to="/Terror" state={{ genre: terror, type: 'Terror' }}>
                        Terror
                    </Link>
                </ol>
                <Link className="nav-ul-li" to="/Duvidas">Dúvidas frequentes</Link>
            </ul>


        </div >
    );
}
export default NavBar;
