import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home"

const Stack = createStackNavigator();

export default function HomeNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home", headerTitleAlign: "Center"}}/>
        </Stack.Navigator>
    )
}