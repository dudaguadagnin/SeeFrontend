import React from 'react';
import { Button } from "react-native"
import Hamb from '../../../../assets/frame.png'
import logo from '../../../../assets/logoText.png'
import Search from '../../../../assets/search.png'
import Seta from '../../../../assets/seta.png'
import './index.css'
//import { useNavigation } from '@react-navigation/native';
import {
    BrowserRouter,
    Routes,
    Route, 
    Link
  } from "react-router-dom";

export const NavBar = (props) => {
    const [newNavBarNormal, setnewNavBarNormal] = React.useState(true)
    const [newNavBarNormalOpen, setnewNavBarNormalOpen] = React.useState(false)
    //const navigate = useNavigate();
    const Toggle = () => {
        setnewNavBarNormalOpen(!newNavBarNormalOpen)
    }
    const TogglePesquisa = () => {
        setnewNavBarNormal(!newNavBarNormal)
    }
    //const navigation = useNavigation();
    const series =
    {
        title: 'serie titulo',
        duration: '2h, 30min',
        cartaz: 'https://occ-0-2529-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYtfkVLxw6lawtNwtIyOhLDnTEXi2AvuyqYG3i-jZ3Y1mrRsZCJAt8mcAxiZqZHQvCS2pl4StiieJUrohIS70br7yzenTsQqVgsVKq3C5A8vuoL_GstEWeB7.jpg?r=d74',
        temporadas: [
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
    }
    const redirect = (href) => {
        //history.replace({pathname: 'InfoMidia'})
        //navigate('/InfoMidia', {replace: true, props: series});
    }

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

                <li  className="nav-ul-li">
                <Link to="/InfoMidia" state={{serie:series}}>Inicial</Link></li>
                <li className="nav-ul-li" onClick={()=> redirect()}>Filmes</li>
                <li className="nav-ul-li" >Séries</li>
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
