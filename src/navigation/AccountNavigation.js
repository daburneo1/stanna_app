import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/Account";
import RegisterFormScreen from "../screens/RegisterForm";

const Stack = createStackNavigator();

export default function AccountNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Account" component={AccountScreen} options={{title: "", headerTransparent: true}}/>
            <Stack.Screen name="RegisterForm" component={RegisterFormScreen} options={{title: "", headerTransparent: true}}/>
        </Stack.Navigator>
    )
}