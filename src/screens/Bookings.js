import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRoomsApi, getRoomDetailsByUrlApi} from "../navigation/api/stanna";
import RoomList from "../components/RoomList";

export default function BookingsScreen () {

    return(
        <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
            <RoomList />
        </SafeAreaView>
    )
}