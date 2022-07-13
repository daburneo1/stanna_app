import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
// import { capitalize } from "lodash"

export default function Header(props) {
    
    const {nombre, imagen} = props;
    return(
        <View>
            <SafeAreaView>
                <View>
                    <Image source={{uri: imagen}} style={styles.image} />
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250
    }
})