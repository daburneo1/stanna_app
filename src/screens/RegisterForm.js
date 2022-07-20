import React from "react";
import {Text, View, StyleSheet, TextInput, Button, Keyboard, Image, TouchableWithoutFeedback, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigation} from "@react-navigation/native";

export default function LoginForm() {

    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: true,
        onSubmit: (formValue) => {
            console.log("Formulario enviado...")
            console.log(formValue)
        }
    });

    const login = () => {
        navigation.navigate('Account')
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Crear nueva cuenta</Text>
            <View style={styles.card}>
                <Text style={styles.text}>Nombres</Text>
                <View style={{flexDirection: "row"}}>
                    <View>
                        <Icon style={styles.iconBox} name="user" />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            value={formik.values.firstname}
                            onChangeText={(text) => formik.setFieldValue('username', text)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Apellidos</Text>
                <View style={{flexDirection: "row"}}>
                    <View>
                        <Icon style={styles.iconBox} name="user" />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            value={formik.values.lastname}
                            onChangeText={(text) => formik.setFieldValue('password', text)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Cédula o Pasaporte</Text>
                <View style={{flexDirection: "row"}}>
                    <View>
                        <Icon style={styles.iconBox} name="hashtag" />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            value={formik.values.dni}
                            onChangeText={(text) => formik.setFieldValue('password', text)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Teléfono</Text>
                <View style={{flexDirection: "row"}}>
                    <View>
                        <Text style={styles.prefixNumberBox}>+593</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.numberInput}
                            value={formik.values.phone}
                            onChangeText={(text) => formik.setFieldValue('password', text)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Correo Electrónico</Text>
                <View style={{flexDirection: "row"}}>
                    <View>
                        <Icon style={styles.iconBox} name="envelope" />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            value={formik.values.email}
                            onChangeText={(text) => formik.setFieldValue('password', text)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Contraseña</Text>
                <View style={{flexDirection: "row"}}>
                    <View>
                        <Icon style={styles.iconBox} name="key" />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            value={formik.values.password}
                            onChangeText={(text) => formik.setFieldValue('password', text)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Confirmar Contraseña</Text>
                <View style={{flexDirection: "row"}}>
                    <View>
                        <Icon style={styles.iconBox} name="key" />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            value={formik.values.passwordCheck}
                            onChangeText={(text) => formik.setFieldValue('password', text)}
                        />
                    </View>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={formik.handleSubmit}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>Registrarse</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={{flexDirection: "row", marginTop: 25, alignSelf: "center", marginBottom: 20}}>
                <View>
                    <Text>¿Tienes una cuenta? </Text>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={login}>
                        <Text style={styles.registerButtom}>Iniciar sesión</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>

        </ScrollView>
    )
}

function validationSchema() {
    return{
        email: Yup.string().required("El correo electrónico es obligatorio").nullable().email(),
        password: Yup.string().required("Debe ingresar la contraseña"),
        passwordCheck: Yup.string().oneOf([Yup.ref('password'), null], "Las contraseñas deben coincidir")
    }
}

function initialValues() {
    return{
        firstname: "",
        lastname: "",
        dni: "",
        phone: "",
        email: "",
        password: "",
        passwordCheck: ""
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 30
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        height: 30,
        width: 300,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 12,
        borderWidth: 0.7,
        padding: 10,
        borderRadius: 10,
        fontSize: 11
    },
    prefixNumberBox: {
        height: 30,
        width: 50,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 8,
        marginLeft: 10,
        borderWidth: 0.7,
        padding: 10,
        borderRadius: 10,
        fontSize: 10,
    },
    numberInput:{
        height: 30,
        width: 270,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 12,
        borderWidth: 0.7,
        padding: 10,
        borderRadius: 10,
        fontSize: 11
    },
    iconBox: {
        height: 40,
        marginLeft: 5,
        marginTop: 12,
        // borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        // marginBottom: 10,
        // textAlignVertical: "center"
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
    },
    error: {
        textAlign: "center",
        color: "red"
    }
})
