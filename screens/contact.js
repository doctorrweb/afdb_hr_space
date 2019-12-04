import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native'
import { Ionicons } from '@expo/vector-icons'



class Contact extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Profile',
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
                <Button
                    title="Logout"
                    onPress={this._logout}
                />
            </View>
        );
    }

    _logout = async() => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
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

export default Contact