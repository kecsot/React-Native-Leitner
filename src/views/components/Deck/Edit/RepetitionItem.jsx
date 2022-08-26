import React from "react";
import {Button, Card} from 'react-native-paper';
import PropTypes from "prop-types";
import {StyleSheet} from "react-native";

export default class RepetitionItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card.Title
                style={styles.cardTitle}
                title={this.props.item.name}
                subtitle={`${this.props.item.repetitionTime.days} days, ${this.props.item.repetitionTime.hours} hours, ${this.props.item.repetitionTime.minutes} minutes`} // TODO: min/mins, hour,hours
                right={props =>
                    <Button
                        icon="pencil"
                        mode="outlined"
                        compact={true}
                        onPress={() => this.props.onEditClicked(this.props.item)}>Edit</Button>}
            />
        );
    }
}

RepetitionItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        repetitionTime: PropTypes.shape({
                days: PropTypes.number.isRequired,
                hours: PropTypes.number.isRequired,
                minutes: PropTypes.number.isRequired
            }
        )
    }).isRequired,
    onEditClicked: PropTypes.func,
    isEditable: PropTypes.bool.isRequired
};

let styles = StyleSheet.create({
    cardTitle: {
        marginRight: 15
    },
});