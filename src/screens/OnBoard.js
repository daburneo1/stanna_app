import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import StannaNavigation from '../navigation/StannaNavigation'

export default function OnBoard ({navigation}) {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"#18395e"}}>
            <Image
                source={require('../assets/Logo_Stanna.png')}
                style={styles.image}
            />
            <Text style={styles.title}>
                HOTEL STANA
            </Text>
            <Text style={styles.slogan}>
                Quédate en un lugar de ensueño
            </Text>
            <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 40}}>
                <Pressable onPress={()=>navigation.navigate(StannaNavigation)}>
                    <View style={styles.buttom}>
                        <Text>Continuar</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image:{
        marginTop: 130,
        alignSelf: "center",
        height: 200,
        width: '53%',
        resizeMode: "stretch",
        tintColor: 'grey',
    },

    title:{
        marginTop: "10%",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
    },

    slogan:{
        marginTop: "2%",
        textAlign: "center",
        color: "white",
        fontStyle: "italic"
    },

    buttom:{
        height: 40,
        marginHorizontal: 30,
        backgroundColor: "white",
        borderRadius: 20,
        marginBottom: 60,
        justifyContent: "center",
        alignItems: "center"
    }
})