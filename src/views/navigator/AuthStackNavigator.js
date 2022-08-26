import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {routingConstants} from "../../_constants/routing.constans";
import LoginScreen from "../screens/auth/LoginScreen";
import WebViewScreen from "../components/Base/WebViewScreen";

const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
                name={routingConstants.LOGIN}
                component={LoginScreen}/>

            <Stack.Screen
                name={routingConstants.WEBVIEW_MODAL_SCREEN}
                component={WebViewScreen}/>

        </Stack.Navigator>
    );
}