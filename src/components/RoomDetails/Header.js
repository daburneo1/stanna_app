import React from "react";
import {StyleSheet, View, Text} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

export default function Header(props) {

    const name = props.name
    const ranking = props.ranking
    const type = props.type
    const price = props.price

    return (
        <View style={styles.container}>
            <View style={{marginTop: 20, marginHorizontal: 20, marginBottom: 0}}>
                <View style={styles.title}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>
                        {name}
                    </Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <Text style={styles.ranking}> <Icon name="star"/> {ranking}</Text>
                        <Text style={styles.type}> <Icon style={{color: "grey"}} name="bed"/> {type}</Text>
                    </View>
                    <View>
                        <Text style={styles.comments}> <Icon name="comment"/> 15 comentarios</Text>
                        <Text style={styles.persons}> <Icon style={{color: "grey"}} name="users"/> 3 personas</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{color: "#18395e", textAlignVertical: "center"}}>$ </Text>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={{textAlignVertical: "center"}}> /noche</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    title: {
        marginBottom: 10
    },
    ranking: {
        color: "black",
        fontSize: 13,
    },
    type: {
        color: "black",
        fontSize: 13,
    },
    comments: {
        color: "black",
        fontSize: 13,
    },
    persons: {
        color: "black",
        fontSize: 13,
    },
    price: {
        color: "#18395e",
        fontSize: 25,
    },
})