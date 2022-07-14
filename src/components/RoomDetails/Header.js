import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/FontAwesome5";
// import { capitalize } from "lodash"

export default function Header(props) {

    const name = props.name
    const image = props.image
    const ranking = props.ranking
    const type = props.type
    const price = props.price

    return (
        <View>
            <SafeAreaView>
                <View style={styles.backgroundImage}>
                    <Image source={{uri: image}} style={styles.image}/>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 20}}>
                    <View style={styles.title}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>
                            {name}
                        </Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View>
                            <Text style={styles.ranking}> <Icon name="star" /> {ranking}</Text>
                            <Text style={styles.type}> <Icon style={{color: "grey"}} name="bed" /> {type}</Text>
                        </View>
                        <View>
                            <Text style={styles.comments}> <Icon name="comment" /> 15 comentarios</Text>
                            <Text style={styles.persons}> <Icon style={{color: "grey"}} name="users" /> 3 personas</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{color:"#18395e", textAlignVertical: "center"}}>$  </Text>
                            <Text style={styles.price}>{price}</Text>
                            <Text style={{textAlignVertical: "center"}}> /noche</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        elevation: 20,
        marginHorizontal: 0,
        marginTop: 0,
        alignItems: "center",
        height: 300
    },
    image: {
        height: '100%',
        width: '100%',
        // borderRadius: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden'
    },
    ranking:{
        color:"black",
        fontSize: 13,
    },
    type:{
        color:"black",
        fontSize: 13,
    },
    comments:{
        color:"black",
        fontSize: 13,
    },
    persons:{
        color:"black",
        fontSize: 13,
    },
    price:{
        color:"#18395e",
        fontSize: 25,
    },
})