import React from 'react';
import CardSlider from '../../molecules/CardSlider'
import Videoks from '../../molecules/Videoks';
import NavBar from '../../molecules/NavBar'
import './index.css'

export const CarrosselPrincipal = (props) => {

  return (
    <div className='carrossel-principal'>
        <div>
            Title
        </div>
        <div>
            genero
        </div>
        <div>
            resumo
        </div>
        <div>
            button
        </div>
    </div>
  );
}

export default CarrosselPrincipal;
/*
<Button
          title="Add some friends"
          onPress={() =>
            props.navigation.navigate('Player')
          }
        />

*/
