import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/FontAwesome5";

import ServicesList from "./ServicesList";

export default function Services(props) {

    const services = props.services

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View>
                    <Text>
                        La habitación incluye los siguientes servicios
                    </Text>
                </View>
                <View>
                    <SafeAreaView style={{flex: 1}}>
                        <ServicesList services={services}/>
                    </SafeAreaView>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
       marginHorizontal: 20
   },
   text:{
       textAlign: "justify"
   }
});