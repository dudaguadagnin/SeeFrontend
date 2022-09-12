import React from 'react';
import CardSlider from '../../molecules/CardSlider'
import Videoks from '../../molecules/Videoks';
import NavBar from '../../molecules/NavBar'
import './index.css'

export const Busca = (props) => {
  //console.log(props)
  return (
    <div className='busca'>
      <NavBar
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
      >
      </NavBar>
    </div>
  );
}

export default Busca;
/*
<Button
          title="Add some friends"
          onPress={() =>
            props.navigation.navigate('Player')
          }
        />

*/
