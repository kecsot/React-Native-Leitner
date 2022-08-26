import React from "react";

import {createDrawerNavigator} from "@react-navigation/drawer";

import {routingConstants} from "../../_constants/routing.constans";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DecksScreen from "../screens/DecksScreen";

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                options={{title: "Decks", headerShown: true}}
                name={routingConstants.DECKS_SCREEN}
                component={DecksScreen}/>
            <Drawer.Screen
                options={{title: "Profile", headerShown: true}}
                name="Profile"
                component={ProfileScreen}/>
            <Drawer.Screen
                options={{title: "Settings", headerShown: true}}
                name="Settings"
                component={SettingsScreen}/>
        </Drawer.Navigator>
    );
}

export default HomeDrawerNavigator;