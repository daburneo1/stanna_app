import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { getRoomDetailsApi } from "../navigation/api/stanna";
import Header from "../components/RoomDetails/Header"

export default function RoomDetail (props) {
    const {
        navigation,
        route: { params },
    } = props;

    // revisar
    const [room, setRoom] = useState(null);

    useEffect(() => {
        (async () => {
            try{
                const response = await getRoomDetailsApi(params.id);
                setRoom(response);
                // console.log(response)
                console.log(room)
            } catch (e) {
                navigation.goBack();
            }
        })()
    }, [params]);

    return(
        <ScrollView>
            {/*<Header name={room.nombre} image={room.imagen}/>*/}
            <Text>sdads</Text>
        </ScrollView>
    );
}