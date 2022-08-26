import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Divider, Title} from 'react-native-paper';
import PropTypes from "prop-types";
import RepetitionTimeSelectModal from "../../Base/Modal/RepetitionTimeSelectModal";
import RepetitionItem from "./RepetitionItem";

export default class RepetitionListForm extends React.Component {

    constructor(props) {
        super(props);

        this.defaultModalItem = {
            id: 0,
            name: "",
            repetitionTime: {
                days: 0,
                minutes: 0,
                hours: 0
            }
        };

        this.state = {
            repetitionList: this.props.repetitionList,
            isModalVisible: false,
            modalItem: this.defaultModalItem
        }
    }

    _hideModal() {
        this.setState({
            isModalVisible: false,
        })
    }

    _onEditClicked(item) {
        this.setState({
            isModalVisible: true,
            modalItem: item
        })
    }

    _onTimeSelectResult(item, data) {
        this.setState({
            isModalVisible: false,
            modalItem: this.defaultModalItem
        })

        const {repetitionList} = this.state;
        let foundItem = repetitionList.find(actualItem => actualItem.id === item.id);
        if (foundItem) {
            if (foundItem.repetitionList !== data) {
                foundItem.repetitionTime = data;
                this.setState({
                    repetitionList: repetitionList
                })
            }
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <Title>Spaced Repetition System</Title>

                <RepetitionTimeSelectModal
                    visible={this.state.isModalVisible}
                    item={this.state.modalItem}
                    onDismiss={() => this._hideModal()}
                    onTimeChanged={(item, data) => this._onTimeSelectResult(item, data)}/>

                <FlatList
                    data={this.state.repetitionList}
                    renderItem={({item, index}) => (
                        <RepetitionItem
                            isEditable={true}
                            onEditClicked={(item) => this._onEditClicked(item)}
                            item={item}/>
                    )}
                    ItemSeparatorComponent={() => (<Divider/>)}
                    keyExtractor={(item) => item.id}/>
            </View>
        );
    }
}

RepetitionListForm.propTypes = {
    repetitionList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            repetitionTime: PropTypes.shape({
                days: PropTypes.number.isRequired,
                hours: PropTypes.number.isRequired,
                minutes: PropTypes.number.isRequired
            })
        })
    ).isRequired
};

let styles = StyleSheet.create({
    view: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "grey"
    },
    modalContent: {
        backgroundColor: "white"
    }
});