import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRoomsApi } from "../navigation/api/stanna";

export default function BookingsScreen () {

    useEffect(() => {
        (async() => {
           await loadRooms()
        })()
    }, []);

    const loadRooms = async () => {
        try {
            const response = await getRoomsApi();
            console.log('ok')
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
            <View style={style.header}>
                <View>
                    <Text>Generamos las mejores opciones</Text>
                    <Text style={{fontWeight: 'bold', marginTop:5}}>basado en tus preferencias</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header:{
        paddingVertical:10,
        marginBottom: 10,
        paddingHorizontal: 20
    }
})