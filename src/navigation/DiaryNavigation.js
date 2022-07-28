import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DiaryScreen from "../screens/Diary";

const Stack = createStackNavigator();

export default function DiaryNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Diary" component={DiaryScreen} options={{title: "Diario", headerTitleAlign: "Center"}}/>
        </Stack.Navigator>
    )
}