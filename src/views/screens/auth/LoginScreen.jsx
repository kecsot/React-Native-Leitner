import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import BaseView from "../../components/Base/BaseView";
import {connect} from "react-redux";
import {login} from "../../../application/actions/auth";
import cardIcon from "../../../../assets/splash.png";
import {isLoginLoading, loginErrorMessage} from "../../../application/selectors/auth";
import BaseLoadingIndicator from "../../components/Base/BaseLoadingIndicator";
import {BASE_URL} from "../../../services/http/http";
import {routingConstants} from "../../../_constants/routing.constans";

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: 'kecsot08@gmail.com',
            password: 'memorex',
        }
    }

    render() {
        const onSignInPressed = () => {
            this.props.login(this.state.username, this.state.password)
        }

        const openWebView = (uri, title) => {
            this.props.navigation.navigate(routingConstants.WEBVIEW_MODAL_SCREEN, {uri: uri, title: title})
        }

        const onForgotPasswordPressed = () => {
            openWebView(BASE_URL + '/user/password', "Forgot password")
        }

        const onSignUpPressed = () => {
            openWebView(BASE_URL + '/user/register', "Register")
        }

        const onTermOfUsePressed = () => {
            openWebView(BASE_URL + '/terms_of_use', "Terms of use")
        }

        const onPrivacyPolicyPressed = () => {
            openWebView(BASE_URL + '/privacy_policy', "Privacy Policy")
        }

        return (
            <BaseView style={styles.view}>
                <View style={styles.viewHeader}>
                    <Image style={styles.headerImage} source={cardIcon}/>
                </View>
                <View style={styles.viewContent}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={this.state.username}
                        disabled={this.props.isLoginLoading}
                        onChangeText={(value) => {
                            this.setState({username: value})
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={this.state.password}
                        disabled={this.props.isLoginLoading}
                        onChangeText={(value) => {
                            this.setState({password: value})
                        }}
                        secureTextEntry
                    />


                    <Button style={styles.button}
                            mode="contained"
                            disabled={this.props.isLoginLoading}
                            onPress={onSignInPressed}>
                        Sign in
                    </Button>
                    <Button style={styles.button} mode="outlined" onPress={onSignUpPressed}>Sign Up</Button>
                    <Button style={styles.button} mode="outbounded" onPress={onForgotPasswordPressed}>Forgot
                        password?</Button>

                    {this.props.loginErrorMessage !== null ?? (
                        <Text>haha</Text>
                    )}

                    {this.props.isLoginLoading ? <BaseLoadingIndicator/> : <></>}
                </View>


                <View style={styles.viewFooter}>
                    <Text onPress={onTermOfUsePressed}>Terms of Use</Text>
                    <Text onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
                </View>

            </BaseView>
        );
    }
}

let styles = StyleSheet.create({
    view: {
        padding: 35,
        height: "100%",
    },
    viewHeader: {
        marginTop: 50,
        marginBottom: 50
    },
    viewContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    viewFooter: {
        marginTop: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    headerImage: {
        marginLeft: "auto",
        marginRight: "auto",
        height: 150,
        width: 150
    },
    input: {
        marginBottom: 10
    },
    button: {
        marginBottom: 10
    },
});

const mapStateToProps = state => {
    return {
        isLoginLoading: isLoginLoading(state),
        loginErrorMessage: loginErrorMessage(state)
    }
}

const mapDispatchToProps = dispatch => ({
    login: (username, password) => {
        dispatch(login(username, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);