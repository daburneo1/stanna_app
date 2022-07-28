import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BookingsScreen from "../screens/Bookings";
import RoomDetailScreen from "../screens/RoomDetail";
import AccountScreen from "../screens/Account";
import BookingDetailScreen from "../screens/BookingDetail";
import PaymentDetailScreen from "../screens/PaymentDetail";

const Stack = createStackNavigator();

export default function BookingsNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Bookings" component={BookingsScreen} options={{title: "Generar Reservación", headerTitleAlign: "center"}}/>
            <Stack.Screen name="RoomDetail" component={RoomDetailScreen} options={{title: "", headerTransparent: true}}/>
            <Stack.Screen name="Account" component={AccountScreen} options={{title: "", headerTransparent: true}}/>
            <Stack.Screen name='BookingDetail' component={BookingDetailScreen} options={{title: "Generar Reservación", headerTitleAlign: "center"}}/>
            <Stack.Screen name='PaymentDetail' component={PaymentDetailScreen} options={{title: "", headerTransparent: true}} />
        </Stack.Navigator>
    )
}