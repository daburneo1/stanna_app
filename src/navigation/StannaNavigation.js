import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5"

// import HomeScreen from "../screens/Home"
import HomeNavigation from "./HomeNavigation";
// import BookingsScreen from "../screens/Bookings";
import BookingsNavigation from "./BookingsNavigation";
// import DiaryScreen from "../screens/Diary";
import DiaryNavigation from "./DiaryNavigation";
// import CloudScreen from "../screens/Cloud";
import AccountNavigation from "./AccountNavigation";
import HomeScreen from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function StannaNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: ({color, size}) => (
                    <Icon name="home" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name="Bookings" component={BookingsNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: ({color, size}) => (
                    <Icon name="briefcase" color={color} size={size}/>
                )

            }}/>
            <Tab.Screen name="Diary" component={DiaryNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: ({color, size}) => (
                    <Icon name="calendar" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name="Cloud" component={AccountNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: ({color, size}) => (
                    <Icon name="user" color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    )
}