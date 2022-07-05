import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CloudScreen from "../screens/Cloud";

const Stack = createStackNavigator();

export default function CloudNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Cloud" component={CloudScreen} options={{title: "Cloud", headerTitleAlign: "Center"}}/>
        </Stack.Navigator>
    )
}