import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from "@react-navigation/native";

import useAuth from "../hooks/useAuth";

export default function PaymentDetail(props) {
    const {
        navigation,
        route: {params},
    } = props;

    const [room, setRoom] = useState(params)

    const {auth} = useAuth()

    const payChecked = () => {
        navigation.navigate('PayChecked')
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Image
                        source={require('../assets/user.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.name}>
                    <Text>{`${auth.firstName} ${auth.lastName}`}</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceText}>$ {room.total}</Text>
                </View>
                <View style={{marginTop: 40}}>
                    <View style={styles.filterListContainer}>
                        <View style={styles.boxCcontainer}>
                            <TouchableWithoutFeedback onPress={payChecked}>
                                    <Image
                                        source={require('../assets/PayPal.png')}
                                        style={styles.imagePayment}
                                    />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.boxContainer}>
                            <Image
                                source={require('../assets/Transferwise.png')}
                                style={styles.imagePayment}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    image: {
        marginTop: 110,
        alignSelf: "center",
        height: 130,
        width: 130
    },
    name: {
        marginTop: 10,
        alignSelf: "center"
    },
    price: {
        marginTop: 50,
        alignSelf: "center"
    },
    priceText: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#18395e"
    },
    filterListContainer: {
        flexDirection: "row",
        paddingHorizontal: 30,

    },
    boxContainer: {
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
        marginHorizontal: 40
    },
    imagePayment: {
        width: 160,
        height: 40,
        resizeMode: "stretch"
    }
})