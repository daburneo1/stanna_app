import React from "react";
import {Text, View, StyleSheet, TextInput, Button, Keyboard, Image, TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function LoginForm() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Logo_Stanna.png')}
                style={styles.image}
            />
            <View style={styles.card}>
                <Text style={styles.text}>Correo Electrónico</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Contraseña</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <TouchableWithoutFeedback>
                <View style={styles.button}>
                    <Text style={styles.textButton}>Iniciar Sesión</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.containerOtherLoginTitle}>
                <Text>Otros métodos de ingreso</Text>
            </View>
            <View style={styles.containerLoginAuth}>
                <View>
                    <TouchableWithoutFeedback>
                        <View style={styles.buttonLogin}>
                            <Image source={require('../../assets/googleLogo.png')} style={styles.authButtom}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <TouchableWithoutFeedback>
                        <View style={styles.buttonLogin}>
                            <Image source={require('../../assets/appleLogo.png')} style={styles.authButtom}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={{flexDirection: "row", marginTop: 25, alignSelf: "center"}}>
                <View>
                    <Text>¿No tienes una cuenta? </Text>
                </View>
                <View>
                    <TouchableWithoutFeedback>
                        <Text style={styles.registerButtom}>Registrate</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30
    },
    image: {
        marginTop: 90,
        marginBottom: 40,
        alignSelf: "center",
        height: 100,
        width: 60
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    text: {
        marginLeft: 20,
        fontWeight: "bold",
        color: "#18395e"
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
    containerOtherLoginTitle: {
        alignSelf: "center",
        marginTop: 15
    },
    containerLoginAuth: {
        flexDirection: "row",
        paddingHorizontal: 30,
        alignSelf: "center",
        marginTop: 20
    },
    spacing: {
        flex: 1,
        paddingHorizontal: 30,
    },
    authButtom: {
        backgroundColor: "#E1E1E1",
        width: 40,
        height: 40,
        marginHorizontal: 20,
        borderRadius: 50
    },
    registerButtom: {
        color: "#18395e",
        fontWeight: "bold",
        marginLeft: 30
    }
});