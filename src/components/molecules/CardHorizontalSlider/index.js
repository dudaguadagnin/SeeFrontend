import React, { CSSProperties } from 'react';
import CardHorizontal from '../CardHorizontal/index.js'
import './index.css'
import Carousel from 'react-native-snap-carousel'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const CardHorizontalSlider = (props) => {
  //console.log(props)
  let teste = [props]
  //console.log(teste)


    const SLIDER_WIDTH = Dimensions.get('window').width + 1
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH)
    const series = [
        {
          title: 'serie titulo',
          duration: '28min',
          cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
          title: 'serie titulo',
          duration: '29min',
          cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
          title: 'serie titulo',
          duration: '29min',
          cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
          title: 'serie titulo', 
          duration: '29min',
          cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
        {
          title: 'serie titulo',
          duration: '29min',
          cartaz: 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg'
        },
      ]
      //console.log('aquis')
    return (
        <div className='card-slider'>
            <Carousel
                layout="default"
                slideStyle={{paddingLeft: '7px'}}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                data={props.midia}
                renderItem={CardHorizontal}
                sliderWidth={'100%'}
                itemWidth={147}
                useScrollView={true}
            />
        </div>
    );
}
export default CardHorizontalSlider;
