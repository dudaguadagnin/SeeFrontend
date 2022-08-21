import React, { CSSProperties } from 'react';
import Card from '../Card'
import './index.css'
import Carousel from 'react-native-snap-carousel'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const CardSlider = (props) => {
    const data = [
        {
          title: "Aenean leo",
          body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
          imgUrl: "https://picsum.photos/id/11/200/300",
        },
        {
          title: "In turpis",
          body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
          imgUrl: "https://picsum.photos/id/10/200/300",
        },
        {
          title: "Lorem Ipsum",
          body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
          imgUrl: "https://picsum.photos/id/12/200/300",
        },
        {
            title: "Lorem Ipsum",
            body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
            imgUrl: "https://picsum.photos/id/12/200/300",
          },
          {
            title: "Lorem Ipsum",
            body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
            imgUrl: "https://picsum.photos/id/12/200/300",
          },
          {
            title: "Lorem Ipsum",
            body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
            imgUrl: "https://picsum.photos/id/12/200/300",
          },
          {
            title: "Lorem Ipsum",
            body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
            imgUrl: "https://picsum.photos/id/12/200/300",
          },
    ]
    const SLIDER_WIDTH = Dimensions.get('window').width + 1
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

   console.log(SLIDER_WIDTH,ITEM_WIDTH)
    return (
        <div className='card-slider'>
            <Carousel
                layout="default"
                slideStyle={{paddingLeft: '7px'}}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                data={data}
                renderItem={Card}
                sliderWidth={'100%'}
                itemWidth={108}
                useScrollView={true}
            />
        </div>
    );
}
export default CardSlider;