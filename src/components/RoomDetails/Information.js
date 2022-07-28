import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Information(props) {

    const description = props.description
    const information = props.information

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 10}}>Descripción</Text>
                    <Text style={styles.text}>{description}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 10, marginTop: 15}}>Check-in / Check-out</Text>
                    <Text style={styles.text}>{information}</Text>
                </View>
            </View>
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