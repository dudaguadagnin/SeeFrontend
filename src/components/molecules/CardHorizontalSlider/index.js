import React, { CSSProperties } from 'react';
import CardHorizontal from '../CardHorizontal/index.js'
import './index.css'
import Carousel from 'react-native-snap-carousel'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const CardHorizontalSlider = (props) => {

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
