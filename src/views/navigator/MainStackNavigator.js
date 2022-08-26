import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {routingConstants} from "../../_constants/routing.constans";
import HomeDrawerNavigator from "./HomeDrawerNavigator";
import CardsOfDeckScreen from "../screens/CardsOfDeckScreen";

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={HomeDrawerNavigator}/>

            <Stack.Screen
                options={{title: "Cards of deck"}}
                name={routingConstants.CARD_LIST_OF_DECK}
                component={CardsOfDeckScreen}/>

        </Stack.Navigator>
    );
}