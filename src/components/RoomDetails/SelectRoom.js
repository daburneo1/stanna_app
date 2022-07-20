import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function SelectRoom () {
    const selectRoom = () => {
        console.log("Seleccionar habitación")
    }

    return (
        <TouchableWithoutFeedback >
            <View style={styles.button}>
                <Text style={styles.textButton}>Seleccionar habitación</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#18395e",
        borderRadius: 15,
        width: 150,
        height: 35,
        marginHorizontal: "35%",
        marginTop: 15
    },
    textButton: {
        color: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        margin: 7
    },
})