import React from 'react';
import {Keyboard, View} from 'react-native';
import CardItemForm from "./CardItemForm";
import BaseLoadingIndicator from "../Base/BaseLoadingIndicator";
import ErrorView from "../Base/ErrorView";
import CardModel from "../../../models/CardModel";
import PropTypes from "prop-types";
import {Button} from "react-native-paper";

export default class EditCard extends React.Component {

    constructor(props) {
        super(props);
        this.cardItemFormRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isCardUpdateSuccess && !prevProps.isCardUpdateSuccess) {
            Keyboard.dismiss();
            this.props.onDismiss();
        }
        if (this.props.isCardUpdateErrorHappened && !prevProps.isCardUpdateErrorHappened) {
            Keyboard.dismiss();
            this.cardItemFormRef.current.disableForm()
        }
    }

    render() {
        return (
            <View>
                {this.props.isCardUpdateErrorHappened && <ErrorView/>}
                {this.props.isCardUpdateLoading && <BaseLoadingIndicator/>}

                {this.props.card && <CardItemForm
                    ref={this.cardItemFormRef}
                    frontText={this.props.card.frontText}
                    backText={this.props.card.backText}
                    actionButtonText={"Save card"}
                    onSubmit={this.onAgree}/>
                }

                <Button
                    mode="outlined"
                    onPress={() => this.props.onCancel()}>
                    Cancel
                </Button>
            </View>
        );
    }
}

EditCard.propTypes = {
    card: PropTypes.instanceOf(CardModel).isRequired,
    isCardUpdateSuccess: PropTypes.bool.isRequired,
    isCardUpdateLoading: PropTypes.bool.isRequired,
    isCardUpdateErrorHappened: PropTypes.bool.isRequired,
    cardUpdateErrorMessage: PropTypes.string,

    onAgree: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};