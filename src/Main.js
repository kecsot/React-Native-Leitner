import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from "react-redux";
import {isLoggedIn} from "./application/selectors/auth";
import {restoreLogin} from "./application/actions/auth";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {AuthStackNavigator} from "./views/navigator/AuthStackNavigator";
import {MainStackNavigator} from "./views/navigator/MainStackNavigator";

export const Stack = createStackNavigator();
export const Drawer = createDrawerNavigator();

function Main(props) {

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            props.restoreLogin();
        };
        bootstrapAsync();
    }, []);

    return (
        <NavigationContainer>
            {!props.isLoggedIn ? (
                <AuthStackNavigator/>
            ) : (
                 <MainStackNavigator/>
            )}
        </NavigationContainer>
    );

}

const mapStateToProps = state => {
    return {
        isLoggedIn: isLoggedIn(state),
    }
}
const mapDispatchToProps = dispatch => ({
    restoreLogin: () => {
        dispatch(restoreLogin())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Main);