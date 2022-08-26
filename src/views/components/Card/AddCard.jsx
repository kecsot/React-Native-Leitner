import React from 'react';
import {Animated, Easing, Keyboard, StyleSheet, View} from 'react-native';
import CardItemForm from "../../components/Card/CardItemForm";
import CardModel from "../../../models/CardModel";
import BaseLoadingIndicator from "../../components/Base/BaseLoadingIndicator";
import LottieView from 'lottie-react-native';
import ErrorView from "../../components/Base/ErrorView";
import PropTypes from "prop-types";
import {Button} from "react-native-paper";

export default class AddCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSuccessAnimationVisible: false,
            successAnimationProgress: new Animated.Value(0),
        };

        this.cardItemFormRef = React.createRef();
    }

    startSuccessAnimation() {
        this.setState({
            isSuccessAnimationVisible: true
        })

        Animated.timing(this.state.successAnimationProgress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
        }).start(() => {
            this.setState({
                isSuccessAnimationVisible: false,
                successAnimationProgress: new Animated.Value(0)
            })
        })
    }

    // TODO: move
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isCardAddSuccess && !prevProps.isCardAddSuccess) {
            this.cardItemFormRef.current.resetForm()
            this.startSuccessAnimation()
        }
        if (this.props.isCardAddErrorHappened && !prevProps.isCardAddErrorHappened) {
            Keyboard.dismiss();
            this.cardItemFormRef.current.disableForm()
        }
    }

    render() {
        return (
            <View>
                {this.props.isCardAddErrorHappened && <ErrorView/>}

                <CardItemForm
                    ref={this.cardItemFormRef}
                    actionButtonText={"Add card"}
                    onSubmit={(values) => {this.props.onAgree(values)}}
                />

                {this.state.isSuccessAnimationVisible && <LottieView
                    style={styles.animation}
                    source={require('../../../../assets/lottie-done.json')}
                    progress={this.state.successAnimationProgress}/>}

                {this.props.isCardAddLoading && <BaseLoadingIndicator/>}

                <Button
                    mode="outlined"
                    onPress={this.props.onCancel}>
                    Cancel
                </Button>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    animation: {
        position: "relative",
        height: 100,
        width: 100,
        marginLeft: "auto",
        marginRight: "auto"
    },
});

AddCard.propTypes = {
    isCardAddSuccess: PropTypes.bool.isRequired,
    isCardAddLoading: PropTypes.bool.isRequired,
    isCardAddErrorHappened: PropTypes.bool.isRequired,
    cardAddErrorMessage: PropTypes.string,

    onAgree: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};