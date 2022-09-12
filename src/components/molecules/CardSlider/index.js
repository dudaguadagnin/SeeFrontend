import React, { CSSProperties } from 'react';
import Card from '../Card'
import './index.css'
import Carousel from 'react-native-snap-carousel'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const CardSlider = (props) => {


    const SLIDER_WIDTH = Dimensions.get('window').width + 1
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

    return (
        <div className='card-slider'>
            <Carousel
                layout="default"
                slideStyle={{paddingRight: '7px'}}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                data={props.midia}
                renderItem={Card}
                sliderWidth={'100%'}
                itemWidth={110}
                useScrollView={true}
            />
        </div>
    );
}
export default CardSlider;