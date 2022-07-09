import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRoomsApi, getRoomDetailsByUrlApi} from "../navigation/api/stanna";
import RoomList from "../components/RoomList";

export default function BookingsScreen () {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        (async() => {
           await loadRooms()
        })()
    }, []);

    const loadRooms = async () => {
        try {
            const response = await getRoomsApi();

            const roomsArray = []
            for await (const room of response){
                const roomDetails = await getRoomDetailsByUrlApi(room.url)

                roomsArray.push({
                    nombre: roomDetails.nombre,
                    tipo: roomDetails.tipo,
                    imagen: roomDetails.imagen.url,
                    precio: roomDetails.precio,
                    ranking: roomDetails.ranking,
                    descripcion: roomDetails.descripcion,
                })

            }

            setRooms([... rooms, ...roomsArray]);
        } catch (error) {
            console.error(error)
        }
    };

    return(
        <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
            <RoomList rooms={rooms}/>
        </SafeAreaView>
    )
}