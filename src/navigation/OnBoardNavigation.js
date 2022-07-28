import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoardScreen from "../screens/OnBoard";

const Stack = createStackNavigator();

export default function BookingsNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="OnBoard" component={OnBoardScreen} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}