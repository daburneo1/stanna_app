import React from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from "@react-navigation/native";

export default function RoomCard(props) {
    const room = props.room
    const fechaEntrada = props.fechaEntrada
    const fechaSalida = props.fechaSalida
    const adults = props.adults
    const childrens = props.childrens
    const navigation = useNavigation();

    const goToRoom = () => {
        console.log(`Vamos a la habitacion: ${room.id}`)
        navigation.navigate('RoomDetail', {
            id: room.id,
            nombre: room.nombre,
            tipo: room.tipo,
            imagen: room.imagen,
            precio: room.precio,
            ranking: room.ranking,
            descripcion: room.descripcion,
            servicios: room.servicios,
            informacion: room.informacion,
            fechaEntrada: fechaEntrada,
            fechaSalida: fechaSalida,
            adults: adults,
            childrens: childrens
        })
    }

    return(
        <TouchableWithoutFeedback onPress = {goToRoom}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        <Image source={{uri: room.imagen}} style={styles.image}/>
                        <View style={styles.cardInfo}>
                            <Text style={styles.ranking}> <Icon name="star" /> {room.ranking}</Text>
                            <Text style={styles.name}>{room.nombre}</Text>
                            <Text style={styles.type}> <Icon style={{color: "grey"}} name="bed" /> {room.tipo}</Text>
                            <View style={{flexDirection: "row"}}>
                                <Text style={{color:"#18395e", textAlignVertical: "center"}}>$  </Text>
                                <Text style={styles.price}>{room.precio}</Text>
                                <Text style={{textAlignVertical: "center"}}> /noche</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 120,
        marginTop: 30,
    },
    spacing: {
        flex: 1,
        paddingHorizontal: 30,
    },
    bgStyles: {
        borderRadius: 20,
        backgroundColor: "#F5F5F5",
    },
    cardInfo:{
        left: 130
    },
    image:{
        position: "absolute",
        bottom: 2,
        left: 0 ,
        width: 120,
        height: 120,
        borderRadius: 20,
    },
    ranking:{
        color:"black",
        fontSize: 13,
        left:"45%"
    },
    name:{
        color:"black",
        fontWeight: "bold",
        fontSize: 15,
        // paddingTop: 10,
        marginTop: 10
    },
    type:{
        color:"black",
        fontSize: 13,
    },
    price:{
        color:"#18395e",
        fontSize: 25,
    },

})