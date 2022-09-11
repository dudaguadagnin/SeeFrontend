import React from 'react';
import { Button } from "react-native"
import Hamb from '../../../../assets/frame.png'
import logo from '../../../../assets/logoText.png'
import Search from '../../../../assets/search.png'
import Seta from '../../../../assets/seta.png'
import './index.css'
import { useNavigation } from '@react-navigation/native';

export const NavBar = (props) => {
    const [newNavBarNormal, setnewNavBarNormal] = React.useState(true)
    const [newNavBarNormalOpen, setnewNavBarNormalOpen] = React.useState(false)

    const Toggle = () => {
        setnewNavBarNormalOpen(!newNavBarNormalOpen)
    }
    const TogglePesquisa = () => {
        setnewNavBarNormal(!newNavBarNormal)
    }
    const navigation = useNavigation();
    return (
        <div className='nav-bar'>
                {
                    newNavBarNormal ?
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

                <li onClick={() => navigation.navigate('InfoMidia')} className="nav-ul-li">Inicial</li>
                <li className="nav-ul-li" onClick={() => navigation.navigate('Filmes')}>Filmes</li>
                <li className="nav-ul-li" onClick={() => navigation.navigate('Séries')}>Séries</li>
                <ol className="nav-ol"> Gêneros
                    <li className="nav-ol-li">Ação
                    </li>
                    <li className="nav-ol-li">
                        Aventura
                    </li>
                    <li className="nav-ol-li">
                        Documentário
                    </li>
                    <li className="nav-ol-li">
                        Fantasia</li>
                    <li className="nav-ol-li">
                        Faroeste
                    </li>
                    <li className="nav-ol-li">
                        Ficção científica
                    </li>
                    <li className="nav-ol-li">
                        Guerra
                    </li>
                    <li className="nav-ol-li">
                        Musicais
                    </li>
                    <li className="nav-ol-li">
                        Romance
                    </li>
                    <li className="nav-ol-li">
                        Terror
                    </li>
                    <li className="nav-ol-li">
                        Tragédia/Drama</li>

                </ol>
            </ul>


        </div>
    );
}
export default NavBar;
