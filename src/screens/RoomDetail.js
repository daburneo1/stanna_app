import React, {useState, useEffect} from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {getRoomDetailsApi, getRoomsApi} from "../navigation/api/stanna";
import Icon from "react-native-vector-icons/FontAwesome5"

import Header from "../components/RoomDetails/Header"
import Services from "../components/RoomDetails/Services";
import Information from "../components/RoomDetails/Information";
import SelectRoom from "../components/RoomDetails/SelectRoom";
import useAuth from "../hooks/useAuth";
import {useNavigation} from "@react-navigation/native";

export default function RoomDetail(props) {
    const {
        navigation,
        route: {params},
    } = props;
    // console.log(params)
    // revisar
    const [room, setRoom] = useState(params);

    const {auth} = useAuth()

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

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => (
                <Icon
                    name="angle-left"
                    color="black"
                    size={30}
                    style={{marginLeft: 20}}
                    onPress={navigation.goBack}
                />
            ),
        });
    }, [navigation, params])

    return (
        <ScrollView>
            <Header name={room.nombre} image={room.imagen} ranking={room.ranking} type={room.tipo} price={room.precio}/>
            <Services services={room.servicios}/>
            <Information description={room.descripcion} information={room.informacion}/>
            <View>
                <SelectRoomIf isAuth={auth}/>
            </View>
        </ScrollView>
    );
}

function SelectRoomIf(props) {
    const navigate = useNavigation();
    const {isAuth} = props;
    const goToLogin = () => {
        navigate.navigate('Account')
    }
    console.log(isAuth)
    if (isAuth) {
        return <SelectRoom/>
    } else {
        return (
            <TouchableWithoutFeedback onPress={goToLogin}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>Iniciar sesión</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#18395e",
        borderRadius: 15,
        width: 150,
        height: 35,
        marginHorizontal: "35%",
        marginTop: 15
    },
    textButton: {
        color: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        margin: 7
    },
})