import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'



class Notification extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Notification',
            headerStyle: {
                backgroundColor: '#e9e9e9',
            },
            headerTintColor: '#02983E',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>No Notification to display!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Notification