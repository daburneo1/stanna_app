import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookingsScreen from "../screens/Bookings";
import RoomDetailScreen from "../screens/RoomDetail";
import LoginFormScreen from "../components/Auth/LoginForm";
import AccountScreen from "../screens/Account";

const Stack = createStackNavigator();

export default function BookingsNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Bookings" component={BookingsScreen} options={{title: "Generar Reservación", headerTitleAlign: "Center"}}/>
            <Stack.Screen name="RoomDetail" component={RoomDetailScreen} options={{title: "", headerTransparent: true}}/>
            <Stack.Screen name="Account" component={AccountScreen} options={{title: "", headerTransparent: true}}/>

        </Stack.Navigator>
    )
}