import React from "react";
import {StyleSheet, View, Text} from "react-native";

import ServicesList from "./ServicesList";

export default function Services(props) {

    const services = props.services

    return (
        <View style={styles.container}>
            <View>
                <Text>
                    La habitación incluye los siguientes servicios
                </Text>
            </View>
            <View>
                <View style={{flex: 1, marginTop: 20}}>
                    <ServicesList services={services}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    text: {
        textAlign: "justify"
    }
});