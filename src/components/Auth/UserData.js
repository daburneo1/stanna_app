import React from "react";
import {Text, View, StyleSheet, TouchableWithoutFeedback, SafeAreaView} from "react-native";

import useAuth from "../../hooks/useAuth";

export default function UserData () {

    const { auth, logout } = useAuth();

    return(
        <SafeAreaView style={styles.content}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Bienvenido, </Text>
                <Text style={styles.title}>
                    {`${auth.firstName} ${auth.lastName}`}
                </Text>
            </View>
            <View style={styles.dataContent}>
                <ItemMenu title={"Nombre"} text={`${auth.firstName} ${auth.lastName}`}/>
                <ItemMenu title={"Email"} text={auth.email}/>
                <ItemMenu title={"Habitaciones reservadas"} text={0}/>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={logout}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>Cerrar Sesión</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}

function ItemMenu(props) {
    const { title, text } = props;
    return(
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}: </Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        marginHorizontal: 20,
        marginTop: 80
    },

    titleBlock: {
        marginBottom: 30
    },

    title: {
        fontWeight: "bold",
        fontSize: 22
    },

    dataContent: {
        marginBottom: 30
    },

    itemMenu: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "grey"
    },

    itemMenuTitle: {
        fontWeight: "bold",
        paddingRight: 20,
        width: 120
    },

    button: {
        backgroundColor: "#18395e",
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
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