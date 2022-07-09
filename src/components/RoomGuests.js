import React, {useState} from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputSpinner from "react-native-input-spinner";

export default function RoomGuests(props) {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View>
            <Text style={{color: "#18395e", fontWeight: "bold", marginHorizontal: 30}}>Huespedes</Text>
            <View style={styles.filterListContainerGuests}>
                <View style={styles.container}>
                    <View style={{margin: 5}}>
                        <View style={styles.filterListContainer}>
                            <View style={styles.container}>
                                <View style={{margin: 5}}>
                                    <View>
                                        <Text style={styles.dateHeader}>Adultos</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Pressable
                                            onPress={() => setAdults(Math.max(0, adults - 1))}
                                            style={styles.button}>
                                            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                                        </Pressable>

                                        <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

                                        <Pressable
                                            onPress={() => setAdults(adults + 1)}
                                            style={styles.button}>
                                            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.container}>
                        <View style={{margin: 5, marginHorizontal: 40}}>
                            <View style={styles.filterListContainer}>
                                <View style={styles.container}>
                                    <View style={{margin: 5}}>
                                        <View>
                                            <Text style={styles.dateHeader}>Niños</Text>
                                        </View>

                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Pressable
                                                onPress={() => setChildren(Math.max(0, children - 1))}
                                                style={styles.button}>
                                                <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                                            </Pressable>

                                            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>

                                            <Pressable
                                                onPress={() => setChildren(children + 1)}
                                                style={styles.button}>
                                                <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    filterListContainerGuests: {
        flexDirection: "row",
        paddingHorizontal: 10,
        marginTop: -1
    },
    filterListContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    dateHeader: {
        marginBottom: 5,
        color: "#18395e",
        fontWeight: "bold"
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    }
});
