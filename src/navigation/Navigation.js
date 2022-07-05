import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardNavigation from './OnBoardNavigation'
import StannaNavigation from "./StannaNavigation";

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="OnBoard" component={OnBoardNavigation} />
            <Stack.Screen name="StannaNavigation" component={StannaNavigation}/>
        </Stack.Navigator>
    );
};

export default Navigation;