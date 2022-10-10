import React from 'react';
import logo from '../../../../assets/logoText.png'
import Search from '../../../../assets/search.png'
import ArrowRigth from '../../../../assets/arrowRigth.png'
import CardSearch from '../../atoms/CardSearch/index.js'
import GenericText from '../../atoms/GenericText';
import './index.css'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import {
    useNavigate
} from "react-router-dom";

export const NavInfo = (props) => {
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


    const [busca, setBusca] = React.useState('')

    const filmesFiltrados = Object.keys(filmes).filter(
        (filme) => filmes[filme].title.toLowerCase().includes(busca.toLowerCase()))

    return (
        <div className='nav-info-bar'>
            {navArrow ?
                <div className='nav-info-bar-components'>
                    <div className="nav-info-button-toggle">
                        <img onClick={() => navigate(-1)} className='nav-info-hamb-arrow' src={ArrowRigth} />
                    </div>
                    <div className='nav-info-logo'>
                        <GenericText>Login</GenericText>
                    </div>
                    <div className='nav-info-search' >
                        <div className='nav-info-search-lupa'>
                            <img className='nav-info-search-img' src={Search} />
                        </div>
                    </div>
                </div>
                : newNavBarNormal ?
                    <div className='nav-info-bar-components'>
                        <div className="nav-info-button-toggle">
                            <img onClick={Toggle} className='nav-info-hamb-arrow' src={ArrowRigth} />
                        </div>
                        
                        <div className='nav-info-logo' >
                            <GenericText>Login</GenericText>
                        </div>
                     
                        <div className='nav-info-search' >
                            <div className='nav-info-search-lupa' onClick={TogglePesquisa}>
                                <img className='nav-info-search-img' src={Search} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='nav-info-bar-components'>
                        <div className="nav-info-button-toggle">
                            <img onClick={TogglePesquisa} className='nav-info-hamb-arrow' src={ArrowRigth} />
                        </div>
                        <div className='nav-info-input-open'>
                            <input
                                className='nav-info-search-input'
                                placeholder="Pesquise aqui..."
                                type='text'
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                            />
                        </div>
                        <div className='nav-info-search' >
                            <div className='nav-info-search-lupa-open'>
                                <img className='nav-info-search-img' src={Search} />
                            </div>
                        </div>
                    </div>
            }
            {
                busca !== '' ?
                    <div className={`pesquisa-expand ${!newNavBarNormal ? " showModalPesquisa" : ""}`}>
                        {
                            !newNavBarNormal ?
                                <div className="text-busca">
                                    <img className="text-busca-img" src={Search} />
                                    <GenericText size="subtitlebold">Resultados para: {busca}</GenericText>
                                </div>
                                : ''
                        }

                        <div className={` ${!newNavBarNormal ? " cards-pesquisa" : ""}`}>

                            {
                                !newNavBarNormal ?

                                    filmesFiltrados.map((filme) => (
                                        <CardSearch
                                            key={filme}
                                            item={filmes[filme]}
                                        ></CardSearch>
                                    ))

                                    : ''
                            }

                            {
                                !newNavBarNormal ?
                                    filmesFiltrados.length === 0 ?
                                        <div className='pesquisa-sem-conteudo'>
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
export default NavInfo;
