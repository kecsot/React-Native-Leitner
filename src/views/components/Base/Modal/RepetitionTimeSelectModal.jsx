import * as React from 'react';
import {Button, Title} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import BaseModal from "./BaseModal";
import PropTypes from "prop-types";

export default class RepetitionTimeSelectModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            maxDays: 365,
            maxHours: 24,
            maxMinutes: 60,

            actualDays: 0,
            actualHours: 0,
            actualMinutes: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //    console.log(prevState, this.state);
    }


    // TODO: plural
    render() {
        return (
            <BaseModal
                visible={this.props.visible}>
                <View>
                    <Title>Time picker</Title>


                    <View style={styles.pickerContainer}>
                        {/*<Picker
                            style={styles.picker}
                            selectedValue={this.state.actualDays}
                            onValueChange={(index) => { this.setState({actualDays:index}) }}>
                            {[...Array(365)].map((x, i) =>
                                <PickerItem label={`${i} days`} value={i} key={i}/>
                            )}
                        </Picker>


                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.actualHours}
                            onValueChange={(index) => { this.setState({actualHours:index}) }}>

                            {[...Array(24)].map((x, i) =>
                                <PickerItem label={`${i} hours`} value={i} key={i}/>
                            )}
                        </Picker>

                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.actualMinutes}
                            onValueChange={(index) => { this.setState({actualMinutes:index}) }}>

                            {[...Array(60)].map((x, i) =>
                                <PickerItem label={`${i} mins`} value={i} key={i}/>
                            )}
                        </Picker>*/}
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.buttonDone}
                            mode="contained"
                            onPress={() => {
                                this.props.onTimeChanged(this.props.item, {
                                    days: this.state.actualDays,
                                    hours: this.state.actualHours,
                                    minutes: this.state.actualMinutes,
                                })
                            }}>Done</Button>

                        <Button
                            mode="outlined" onPress={this.props.onDismiss}>
                            Cancel
                        </Button>
                    </View>

                </View>
            </BaseModal>
        );
    }
};

RepetitionTimeSelectModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        repetitionTime: PropTypes.shape({
            days: PropTypes.number.isRequired,
            hours: PropTypes.number.isRequired,
            minutes: PropTypes.number.isRequired
        })
    }).isRequired,
    onTimeChanged: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired,
};

let styles = StyleSheet.create({
    pickerContainer: {
        display: "flex",
        flexDirection: "row",
    },
    picker: {
        width: "33%"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: 10
    },
    buttonDone: {
        marginRight: 10
    }
});