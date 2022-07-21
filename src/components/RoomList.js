import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, Pressable, ActivityIndicator} from "react-native";

import RoomCard from "./RoomCard";
import RoomFilter from "./RoomFilter";
import RoomGuests from "./RoomGuests";
import {getRoomDetailsByUrlApi, getRoomsApi} from "../navigation/api/stanna";

export default function RoomList() {

    const [rooms, setRooms] = useState([]);
    const [fecha1, setFecha1] = useState('FECHA')
    const [fecha2, setFecha2] = useState('FECHA2')
    const [adults, setAdults] = useState(0)
    const [childrens, setChildrens] = useState(0)
    const [load, setLoad] = useState(false)

    // useEffect(() => {
    //     (async () => {
    //         await loadRooms();
    //     })();
    // }, []);

    const loadRooms = async () => {
        // if (load) {
            try {
                console.log(fecha1, fecha2, adults, childrens)
                const response = await getRoomsApi();
                const roomsArray = []
                for await (const room of response) {
                    const roomDetails = await getRoomDetailsByUrlApi(room.url)

                    roomsArray.push({
                        id: roomDetails.id,
                        nombre: roomDetails.nombre,
                        tipo: roomDetails.tipo,
                        imagen: roomDetails.imagen,
                        precio: roomDetails.precio,
                        ranking: roomDetails.ranking,
                        descripcion: roomDetails.descripcion,
                        servicios: roomDetails.servicios,
                        informacion: roomDetails.informacion
                    });
                }

                setRooms([...rooms, ...roomsArray]);
            } catch (error) {
                console.error(error)
            }
        // }


    };

    const loadMore = () => {
        loadRooms()
    }

    return (
        <View>
            <View style={styles.header}>
                <View>
                    <Text>Generamos las mejores opciones</Text>
                    <View style={{flexDirection: "row", marginTop: 5}}>
                        <Text>basado en </Text>
                        <Text style={{fontWeight: 'bold'}}>tus preferencias</Text>
                    </View>
                </View>
            </View>
            <View>
                <RoomFilter setFecha1={setFecha1} setFecha2={setFecha2}/>
            </View>
            <View>
                <RoomGuests setAdults={setAdults} setChildrens={setChildrens}/>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={loadRooms}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Buscar</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={rooms}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(room) => String(room.id)}
                    renderItem={({item}) => <RoomCard
                        room={item}
                        fechaEntrada={fecha1}
                        fechaSalida={fecha2}
                        adults={adults}
                        childrens={childrens}
                    />}
                    contentContainerStyle={styles.flatListContentContainer}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={
                        <ActivityIndicator
                            size="large"
                            style={styles.spinner}
                            color="#18395e"
                        />
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 30,
        marginTop: -20
    },
    flatListContentContainer: {
        paddingHorizontal: 5,
        paddingBottom: 400
    },
    container: {
        padding: 2,
        display: "flex",
        marginBottom: 10
    },
    button: {
        backgroundColor: "#18395e",
        borderRadius: 15,
        width: 120,
        height: 25,
        marginHorizontal: "35%",
        marginTop: 10
    },
    textButton: {
        color: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold"
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60
    }
})
