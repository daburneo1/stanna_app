import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Services(props) {

    const services = props.services
    const description = props.description

    return (
        <View>
            <SafeAreaView>
                <View>
                    <Text>
                        La habitación incluye los siguientes servicios
                    </Text>
                </View>
                <View>
                    <Text>Servicios</Text>
                </View>
                <View>
                    <Text>Descripción</Text>
                    <Text>{description}</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}