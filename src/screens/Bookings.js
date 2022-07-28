import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import RoomList from "../components/RoomList";

export default function BookingsScreen () {

    return(
        <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
            <RoomList />
        </SafeAreaView>
    )
}