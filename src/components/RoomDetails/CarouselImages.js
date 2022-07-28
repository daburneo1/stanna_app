import React, { useState } from "react";
import {ActivityIndicator, Dimensions, Image, StyleSheet, Text, View} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { size } from 'lodash'

const widthScreen = Dimensions.get("window").width

export default function CarouselImages(images) {

    const [activeSlide, setActiveSlide] = useState(null);

    const renderItem = ({item}) => {
        return (
            <Image
                style={styles.image}
                PlaceholderContent={<ActivityIndicator color='#fff'/>}
                source={{uri: item.imagen}}
            />
        )
    }
    console.log('imagen', images.images)
    return (
        <View style={styles.container}>
            <Carousel
                layout={'default'}
                data={images.images}
                sliderWidth={widthScreen}
                itemWidth={widthScreen}
                itemHeight={250}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <MyPagination data={images.images} activeSlide={activeSlide} />
        </View>
    )
}

function MyPagination({data, activeSlide}) {
    return(
        <Pagination
            activeDotIndex={activeSlide}
            dotsLength={size(data)}
            containerStyle={styles.containerPagination}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={styles.dotInactive}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.6}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 0
    },
    image: {
        width: widthScreen,
        height: 250
    },
    containerPagination: {
        backgroundColor: 'transparent',
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    dotActive:{
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 2,
        backgroundColor: 'black'

    },
    dotInactive:{
        width: 14,
        height: 14,
        borderRadius: 7,
        marginHorizontal: 2,
        backgroundColor: "#fff"
    }
})