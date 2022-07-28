import React from "react";
import {View, FlatList, StyleSheet} from "react-native";

import ServiceCard from "../RoomDetails/ServiceCard"

export default function ServicesList(props) {
    const services = props.services;

    console.log(services)

    return (
        <View style={styles.container}>
            <FlatList
                data={services}
                horizontal={true}
                keyExtractor={(services) => String(services.id)}
                renderItem={({item}) => <ServiceCard service={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        display: "flex",
        marginBottom: 15
    }
})