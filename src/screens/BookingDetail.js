import React, {useEffect, useState} from "react";
import {Image, Pressable, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/FontAwesome5";
import moment from "moment";

export default function BookingDetail(props) {
    const {
        navigation, route: {params}
    } = props;

    const [room, setRoom] = useState(params);
    const [noDays, setNoDays] = useState('')
    const [subtotal, setSubtotal] = useState('')
    const [tax, setTax] = useState(0.0)
    const [total, setTotal] = useState(0.0)

    useEffect(() => {
        getNoDays()
        getPrice()
    })

    const getNoDays = () => {
        let fecha1 = moment(room.fechaEntrada)
        let fecha2 = moment(room.fechaSalida)

        let noDays = (fecha2.diff(fecha1, 'days', 'dias de diferencia'))

        setNoDays(noDays)
    }

    const getPrice = () => {
        let price = room.precio
        let subtotal = price * noDays

        let tax = subtotal * 0.12
        let total = subtotal + tax

        setSubtotal(subtotal)
        setTax(tax)
        setTotal(total)
    }

    const goToPayment = () => {
        navigation.navigate('PaymentDetail', {
            id: room.id,
            total: total
        })
    }

    return (
        <ScrollView>
            <SafeAreaView>
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
                    <View style={styles.filterListContainer}>
                        <View style={styles.container}>
                            <View style={{margin: 10, marginHorizontal: 20}}>
                                <Text style={styles.dateHeader}>Fecha de Ingreso</Text>
                                <TouchableWithoutFeedback onPress={() => showMode('date')}>
                                    <View style={styles.card}>
                                        <View>
                                            <View style={styles.bgStyles}>
                                                <Text style={styles.dateText}><Icon
                                                    name="calendar"/> {room.fechaEntrada}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={{margin: 5, marginHorizontal: 20}}>
                                <Text style={styles.dateHeader}>Fecha de Salida</Text>
                                <TouchableWithoutFeedback onPress={() => showMode2('date2')}>
                                    <View style={styles.card}>
                                        <View>
                                            <View style={styles.bgStyles}>
                                                <Text style={styles.dateText}><Icon name="calendar"/> {room.fechaSalida}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{color: "#18395e", fontWeight: "bold", marginHorizontal: 30}}>Huespedes</Text>
                    <View style={styles.filterListContainerGuests}>
                        <View style={styles.container}>
                            <View style={{margin: 5}}>
                                <View style={styles.filterListContainer}>
                                    <View style={{marginTop: 5}}>
                                        <Text>Adultos</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 15}}>
                                        <Pressable
                                            onPress={() => null}
                                            style={styles.button}>
                                            <Text style={{fontSize: 20, color: '#474747', marginBottom: 9}}>-</Text>
                                        </Pressable>

                                        <Text style={{marginHorizontal: 10, fontSize: 16}}>{room.adults}</Text>

                                        <Pressable
                                            onPress={() => null}
                                            style={styles.button}>
                                            <Text style={{fontSize: 20, color: '#474747', marginBottom: 9}}>+</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.container}>
                                <View style={{margin: 5, marginHorizontal: -15}}>
                                    <View style={styles.filterListContainer}>
                                        <View style={{marginTop: 5}}>
                                            <Text>Niños</Text>
                                        </View>

                                        <View
                                            style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 15}}>
                                            <Pressable
                                                onPress={() => null}
                                                style={styles.button}>
                                                <Text style={{fontSize: 20, color: '#474747', marginBottom: 9}}>-</Text>
                                            </Pressable>

                                            <Text style={{marginHorizontal: 10, fontSize: 16}}>{room.childrens}</Text>

                                            <Pressable
                                                onPress={() => null}
                                                style={styles.button}>
                                                <Text style={{fontSize: 20, color: '#474747', marginBottom: 9}}>+</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{color: "#18395e", fontWeight: "bold", marginHorizontal: 30}}>Habitación
                        seleccionada</Text>
                    <View style={styles.cardRoom}>
                        <View style={styles.spacingRoom}>
                            <View style={styles.bgStylesRoom}>
                                <Image source={{uri: room.imagen}} style={styles.image}/>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.ranking}> <Icon name="star"/> {room.ranking}</Text>
                                    <Text style={styles.name}>{room.nombre}</Text>
                                    <Text style={styles.type}> <Icon style={{color: "grey"}} name="bed"/> {room.tipo}
                                    </Text>
                                    <View style={{flexDirection: "row"}}>
                                        <Text style={{color: "#18395e", textAlignVertical: "center"}}>$ </Text>
                                        <Text style={styles.price}>{room.precio}</Text>
                                        <Text style={{textAlignVertical: "center"}}> /noche</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={{
                        color: "#18395e",
                        fontWeight: "bold",
                        marginTop: 15
                    }}>Subtotal</Text>
                    <View style={styles.dataContent}>
                        <ItemMenu title={`Hospedaje (${noDays} noches)`} text={subtotal}/>
                        <ItemMenu title={"Impuestos y servicios"} text={tax}/>
                        <ItemMenu title={"Total"} text={total}/>
                    </View>
                </View>
                <View style={styles.header}>
                    <View style={styles.filterListContainer}>
                        <View style={styles.container}>
                            <View style={{margin: 0, marginLeft: -10, marginRight: 170}}>
                                <Text style={styles.dateHeader}>Método de pago</Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={{margin: 10, marginHorizontal: 20}}>
                                <TouchableWithoutFeedback onPress={goToPayment}>
                                    <View style={styles.button}>
                                        <Icon name={"arrow-right"} />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>)
}

function ItemMenu(props) {
    const {title, text} = props;
    return (
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}: </Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 30,
        marginTop: 0
    },
    filterListContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,

    },
    card: {
        height: 35,
        width: 140
    },
    spacing: {
        // paddingHorizontal: 30,
    },
    bgStyles: {
        borderRadius: 5,
        backgroundColor: "#F5F5F5",
    },
    container: {
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    dateHeader: {
        marginBottom: 5,
        color: "#18395e",
        fontWeight: "bold"
    },
    dateText: {
        textAlign: "center"
    },
    filterListContainerGuests: {
        flexDirection: "row",
        paddingHorizontal: 15,
        marginTop: -1
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 8,
        borderColor: '#F5F5F5',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardRoom: {
        // flex: 1,
        height: 120,
        marginTop: 30,
    },
    spacingRoom: {
        flex: 1,
        paddingHorizontal: 30,
    },
    bgStylesRoom: {
        borderRadius: 20,
        backgroundColor: "#DEDEDE",
        height: 120
    },
    cardInfo: {
        left: 130
    },
    image: {
        position: "absolute",
        bottom: 2,
        left: 0,
        width: 120,
        height: 120,
        borderRadius: 20,
    },
    ranking: {
        color: "black",
        fontSize: 13,
        left: "45%"
    },
    name: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
        // paddingTop: 10,
        marginTop: 10
    },
    type: {
        color: "black",
        fontSize: 13,
    },
    price: {
        color: "#18395e",
        fontSize: 25,
    },
    itemMenu: {
        flexDirection: 'row',
        paddingVertical: 5,

    },

    itemMenuTitle: {
        fontWeight: "bold",
        paddingRight: 20,
        width: 300
    },
    dataContent: {
        marginBottom: 30,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "grey"
    },
})