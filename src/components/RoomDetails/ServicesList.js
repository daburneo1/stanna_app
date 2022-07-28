import React, {useState, useEffect} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import ServiceCard from "../RoomDetails/ServiceCard"

export default function ServicesList(props) {
    const services = props.services;

    console.log(services)

    // useEffect(() => {
    //     (async () => {
    //         await loadServices();
    //     })();
    // }, []);
    //
    // const loadServices = async () => {
    //     try {
    //         roomServices === await getRoomServicesApi(url)
    //
    //     } catch (e) {
    //         console.error(e)
    //     }
    //     console.log(roomServices)
    // };

    return (
        <View style={styles.container}>
            <FlatList
                data={services}
                horizontal={true}
                keyExtractor={(services) => String(services.id)}
                renderItem={({item}) => <ServiceCard service={item}/>}
                contentContainerStyle={styles.flatListContentContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        // paddingHorizontal: 5,
        // paddingBottom: 20
    },
    container: {
        padding: 2,
        display: "flex",
        marginBottom: 15
    }
})