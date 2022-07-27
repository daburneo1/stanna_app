import React from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"

export default function ServiceCard(props) {
    const { service } = props

    return(
        <View>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        <Image source={{uri: service.imagen}} style={styles.image} />
                        <View style={styles.cardInfo}>
                            <Text style={styles.text}>{service.servicio}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

    const styles = StyleSheet.create({
        card: {
            flex: 1,
            height: 80,
            width: 80,
            marginHorizontal: 5,
            backgroundColor: "#F0E0EC",
            borderRadius: 20,
            borderColor: "black",
            borderWidth: 1,
            marginBottom: 5
        },
        spacing: {
            flex: 1
        },
        bgStyles: {
            borderRadius: 20
        },
        image:{
            position: "absolute",
            width: 30,
            height: 30,
            alignSelf: "center",
            marginTop: 15
        },
        cardInfo:{
            marginTop: 50,
            alignItems: "center"
        },
        text:{
            fontSize: 11
        }
    })
