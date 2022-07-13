import React, { useState, useEffect } from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import { getRoomDetailsApi, getRoomsApi } from "../navigation/api/stanna";
import Header from "../components/RoomDetails/Header"
import Services from "../components/RoomDetails/Services";

export default function RoomDetail (props) {
    const {
        navigation,
        route: { params },
    } = props;

    // revisar
    const [room, setRoom] = useState(params);

    // useEffect(() => {
    //     (async () => {
    //         try{
    //             const response = await getRoomDetailsApi(params.id);
    //             setRoom({response})
    //         } catch (e) {
    //             console.error(e)
    //             navigation.goBack()
    //         }
    //     })();
    //     console.log(room)
    // }, [params]);

    return(
        <ScrollView>
            <Header name={room.nombre} image={room.imagen} ranking={room.ranking} type={room.tipo} price={room.precio}/>
            <Services services={room.servicios} description={room.descripcion} />
            <TouchableWithoutFeedback >
                <View style={styles.button}>
                    <Text style={styles.textButton}>Seleccionar</Text>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#18395e",
        borderRadius: 15,
        width: 120,
        height: 35,
        marginHorizontal: "35%",
        marginTop: 10
    },
    textButton: {
        color: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        margin: 7
    },
})