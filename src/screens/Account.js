import React from "react";
import { View} from "react-native";

import useAuth from "../hooks/useAuth";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

export default function Account () {

    const {auth} = useAuth();

    return(
        <View>
            {auth ? <UserData /> : <LoginForm />}
        </View>
    )
}