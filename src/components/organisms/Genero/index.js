import React from 'react';
import CardSlider from '../../molecules/Filmes/CardSliderFilmes'
import NavBar from '../../molecules/NavBar'
import GenericText from '../../atoms/GenericText';
import {
  useLocation
} from "react-router-dom";
import './index.css'

export const Genero = (props) => {
  const location = useLocation()

  return (
    <div className='genero'>
      <NavBar
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
      >
      </NavBar>
      <div className='genero-destaques'>
        <div className='genero-space-text'>
          <GenericText size="subtitlebold">{location.state.type}</GenericText>
        </div>
        {location.state.genre.length > 0 ?
          <div>
            <div className='genero-space-carrossel'>
              <CardSlider midia={location.state.genre} />
            </div>
            <div className='genero-space-carrossel'>
              <CardSlider midia={location.state.genre} />
            </div>
            <div className='genero-space-carrossel'>
              <CardSlider midia={location.state.genre} />
            </div>
          </div>
          :
          <div className='genre-sem-conteudo'>
            <GenericText size="medium">
              Não temos conteúdo desse gênero no momento
            </GenericText> </div>
        }
      </div>
    </div>
  );
}

export default Genero;
