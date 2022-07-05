import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookingsScreen from "../screens/Bookings";

const Stack = createStackNavigator();

export default function BookingsNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Bookings" component={BookingsScreen} options={{title: "Generar Reservación", headerTitleAlign: "Center"}}/>
        </Stack.Navigator>
    )
}