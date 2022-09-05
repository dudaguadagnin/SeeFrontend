import React from 'react';
import { Button } from "react-native"
import Hamb from '../../../../assets/frame.png'
import logo from '../../../../assets/logoText.png'
import Search from '../../../../assets/search.png'
import './index.css'
import { useNavigation } from '@react-navigation/native';

export const NavBar = (props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    const navigation = useNavigation();
    return (
        <div className='nav-bar'>
            <div className='nav-bar-components'>
                <div onClick={handleToggle} className="nav-button-toggle">
                    {navbarOpen ?
                        <img className='nav-hamb' src={Hamb} /> : <img className='nav-hamb' src={Hamb} />
                    }
                </div>
                <div className='nav-logo'>
                    <img className='nav-logo' src={logo} />
                </div>
                <div className='nav-search'>
                    <img className='nav-search' src={Search} />
                </div>

            </div>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>

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
