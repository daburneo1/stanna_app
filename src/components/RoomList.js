import React from "react";
import {View, Text, FlatList, StyleSheet, TouchableWithoutFeedback} from "react-native";

import RoomCard from "./RoomCard";
import RoomFilter from "./RoomFilter";
import RoomGuests from "./RoomGuests";

export default function RoomList(props) {
    const { rooms } = props;
    console.log(rooms)
    return(
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
                <RoomFilter />
            </View>
            <View>
                <RoomGuests />
            </View>
            <View>
                <TouchableWithoutFeedback>
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
                    renderItem={({item}) => <RoomCard room={item} />}
                    contentContainerStyle={styles.flatListContentContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 20,
        marginTop: -20
    },
    flatListContentContainer: {
        paddingHorizontal: 5,
    },
    container:{
        marginBottom: 0
    },
    button:{
        backgroundColor: "#18395e",
        borderRadius: 15,
        width: 120,
        height: 25,
        marginHorizontal: "35%",
        marginTop: 10
    },
    textButton:{
        color: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold"
    }
})
