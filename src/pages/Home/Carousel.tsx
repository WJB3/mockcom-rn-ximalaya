import React, { useState } from 'react';
import SnapCarousel, {
    AdditionalParallaxProps,
    ParallaxImage,
    Pagination
} from 'react-native-snap-carousel';
import {
    viewportWidth,
    wp,
    hp
} from '@/utils/index'
import { StyleSheet, View } from 'react-native';
import { ICarousel } from '@/models/home'
 

const sliderWidth = viewportWidth;
const slideWidth = wp(90);

const itemWidth = slideWidth + wp(2) * 2;
const slideHeight = hp(26);

interface IProps{
    data:ICarousel[]
}

const Carousel = (props:IProps) => {

    const {data}=props;

    console.log("Carousel",data)

    const [activeSlide, setActiveSlide] = useState(0);

    const handleSnapToItem = (index: number) => {
        setActiveSlide(index)
    }

    const renderItem = ({item}:{item:ICarousel}, parallaxProps?: AdditionalParallaxProps) => {
        return (
            <ParallaxImage
                source={{ uri: item.image }}
                style={style.image}
                containerStyle={style.imageContainer}
                parallaxFactor={0.4}
                showSpinner
                spinnerColor="rgba(0,0,0,0.24)"
                {...parallaxProps}
            />
        )
    }

    const CustomPagination = (
        <View style={style.paginationWrapper}>
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                containerStyle={style.paginationContainer}
                dotContainerStyle={style.dotContainer}
                dotStyle={style.dot}
                inactiveDotScale={0.7}
                inactiveDotOpacity={0.4}
            />
        </View>
    )

    return (
        <View>
            <SnapCarousel
                data={data}
                renderItem={renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages
                onSnapToItem={handleSnapToItem}
                loop
                autoplay
            />
            {CustomPagination}
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover'
    },
    imageContainer: {
        width: itemWidth,
        height: slideHeight,
        borderRadius: 8
    },
    paginationWrapper:{
        justifyContent:'center',
        alignItems:'center',
    },
    paginationContainer:{
        position:'absolute',
        top:-20,
        paddingHorizontal:3,
        paddingVertical:4,
        borderRadius:8
    },
    dotContainer:{
        marginHorizontal:6,
    },
    dot:{
        width:6,
        height:6,
        borderRadius:3,
        backgroundColor:'rgba(255,255,255,0.92)'
    }
})

export default Carousel;