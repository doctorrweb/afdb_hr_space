import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { Button, Icon } from 'native-base'
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
                <Text>
                    HR Space 1.0 Beta
                </Text>
                <Text>
                    © 2019 AfDB HR SPACE All Rights Reserved
                </Text>
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