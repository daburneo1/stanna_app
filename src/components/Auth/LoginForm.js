import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput, Button, Keyboard, Image, TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigation} from "@react-navigation/native";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {

    const [error, setError] = useState('')

    const {login} = useAuth();

    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: true,
        onSubmit: (formValue) => {
            setError('')
            const { email, password } = formValue;
            console.log(email, password)
            if (email !== user.email || password !== user.password){
                setError('El correo electrónico o la contraseña son incorrectos')
            } else {
                login(userDetails)
                console.log("Login correcto")
                console.log(userDetails)
            }
        }
    });

    const registerNewUser = () => {
        navigation.navigate('RegisterForm')
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Logo_Stanna.png')}
                style={styles.image}
            />
            <View style={styles.card}>
                <Text style={styles.text}>Correo Electrónico</Text>
                <TextInput
                    style={styles.input}
                    value={formik.values.email}
                    onChangeText={(text) => formik.setFieldValue('email', text)}
                />
            </View>
            <View style={styles.card}>
                <Text style={styles.text}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={formik.values.password}
                    onChangeText={(text) => formik.setFieldValue('password', text)}
                />
            </View>
            <TouchableWithoutFeedback onPress={formik.handleSubmit}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>Iniciar Sesión</Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.error}>{formik.errors.email}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            <Text style={styles.error}>{error}</Text>
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
                    <TouchableWithoutFeedback onPress={registerNewUser}>
                        <Text style={styles.registerButtom}>Registrate</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>

        </View>
    )
}

function validationSchema() {
    return{
        email: Yup.string().required("Debe ingresar un correo electrónico"),
        password: Yup.string().required("Debe ingresar la contraseña")
    }
}

function initialValues() {
    return{
        email: "",
        password: ""
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30
    },
    image: {
        marginTop: 50,
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
    },
    error: {
        textAlign: "center",
        color: "red"
    }
});