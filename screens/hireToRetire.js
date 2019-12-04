import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableHighlight, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Container, CheckBox, Content, Button, List, ListItem, Text, Icon, Left, Body, Right, View, H3 } from 'native-base';
import { FromHireToRetireData } from '../data/benefits/fromHireToRetireData'


class HireToRetire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            modalVisible: false,
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'From Hire to Retire',
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
            <Container>
                <Content>
                    <List>
                        <ScrollView>
                            {
                                FromHireToRetireData.map(data => {
                                    return (
                                        <View key={`${data.title}${FromHireToRetireData.indexOf(data)}`}>
                                            <Text
                                                style={{
                                                    backgroundColor: '#e9e9e9',
                                                    padding: 10,
                                                    fontWeight: 'bold',
                                                    color: '#02983E',
                                                    fontSize: 14
                                                }}
                                            >
                                                {data.title}
                                            </Text>
                                            {
                                                data.content.map(step => {
                                                    return (
                                                        <View
                                                            key={`${step.stepTitle}${data.content.indexOf(step)}`}

                                                        >
                                                            <ListItem itemHeader first key='main'>
                                                                <Text
                                                                    style={{
                                                                        fontSize: 13,
                                                                        fontWeight: 'bold',
                                                                        color: '#02983E'
                                                                    }}
                                                                >
                                                                    {step.stepTitle}
                                                                </Text>
                                                            </ListItem>
                                                            {
                                                                step.actions.map(action => {
                                                                    return (
                                                                        <ListItem
                                                                            icon
                                                                            key={`${step.stepTitle}-item-${step.actions.indexOf(action)}`}
                                                                            style={{
                                                                                padding: 8
                                                                            }}
                                                                        >
                                                                            <Body>
                                                                                <Text
                                                                                    style={{
                                                                                        fontSize: 13,
                                                                                        fontWeight: 'normal'
                                                                                    }}
                                                                                    note
                                                                                    numberOfLines={1}
                                                                                >
                                                                                    {action}
                                                                                </Text>
                                                                            </Body>
                                                                            <Right>
                                                                                <Button
                                                                                    transparent 
                                                                                    onPress={() => {
                                                                                        this.setState({ modalVisible: true })
                                                                                    }}
                                                                                >
                                                                                    <Text
                                                                                        style={{
                                                                                            fontSize: 13,
                                                                                            fontWeight: 'normal'
                                                                                        }}
                                                                                    >
                                                                                        View
                                                                                    </Text>
                                                                                </Button>
                                                                            </Right>
                                                                            <Modal
                                                                                animationType="slide"
                                                                                transparent={false}
                                                                                visible={this.state.modalVisible}
                                                                                onRequestClose={() => {
                                                                                    Alert.alert('Modal has been closed.');
                                                                                }}>
                                                                                <View style={{ marginTop: 22 }}>
                                                                                    <View>
                                                                                        <Text>{action}</Text>

                                                                                        <TouchableHighlight
                                                                                            onPress={() => {
                                                                                                this.setState({ modalVisible: !this.state.modalVisible })
                                                                                            }}>
                                                                                            <Text>Hide Modal</Text>
                                                                                        </TouchableHighlight>
                                                                                    </View>
                                                                                </View>
                                                                            </Modal>
                                                                        </ListItem>
                                                                    )
                                                                })
                                                            }
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </List>
                    <View style={styles.container}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Home')}
                            style={{
                                backgroundColor: '#02983E',
                                //width: '60%',
                                padding: 8
                            }}
                            small
                        >
                            <Text>Back Home</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 100,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
});

export default HireToRetire