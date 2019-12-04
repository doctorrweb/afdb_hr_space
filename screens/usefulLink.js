import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons'



class UsefulLink extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Useful Link',
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
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/logo.png')} />
                            </Left>
                            <Body>
                                <Text>African Development Bank Website</Text>
                                <Text note numberOfLines={1}>The AfDB official Website</Text>
                            </Body>
                            <Right>
                                <Button onPress={() => Linking.openURL("https://www.afdb.org/en")} transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/logo.png')} />
                            </Left>
                            <Body>
                                <Text>AfDB Intrabank</Text>
                                <Text note numberOfLines={1}>African Development Bank Intranet </Text>
                            </Body>
                            <Right>
                                <Button onPress={() => Linking.openURL("http://intrabank.afdb.org/")} transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/icon-sap-pwd.png')} />
                            </Left>
                            <Body>
                                <Text>SAP Password Reset</Text>
                                <Text note numberOfLines={1}>Change or reset your SAP Password.</Text>
                            </Body>
                            <Right>
                                <Button onPress={() => Linking.openURL("http://tnepoprd.afdb.org:50000/irj/portal")} transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/icon-sap.png')} />
                            </Left>
                            <Body>
                                <Text>SAP HR Employee Portal</Text>
                                <Text note numberOfLines={1}>. . .</Text>
                            </Body>
                            <Right>
                                <Button onPress={() => Linking.openURL("http://tnepoprd1v.afdb.org:50000/irj/portal")} transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/icon-education-benefit.jpg')} />
                            </Left>
                            <Body>
                                <Text>Education Benefits</Text>
                                <Text note numberOfLines={1}>Request or Justification of Advance of Education fees  </Text>
                            </Body>
                            <Right>
                                <Button onPress={() => Linking.openURL("http://hrss.afdb.org/benefits")} transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/icon-pms2.png')} />
                            </Left>
                            <Body>
                                <Text>Performance Management 2.0</Text>
                                <Text note numberOfLines={1}>. . .</Text>
                            </Body>
                            <Right>
                                <Button onPress={() => Linking.openURL("http://apps.afdb.org:8080/pms/user/login")} transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/icon-lms.png')} />
                            </Left>
                            <Body>
                                <Text>New Learning Management System (LMS)</Text>
                                <Text note numberOfLines={1}>. . .</Text>
                            </Body>
                            <Right>
                                <Button onPress={() => Linking.openURL("https://sfp1.afdb.org/adfs/ls/idpinitiatedsignon.aspx?RelayState=RPID%3Dhttps%253A%252F%252Fwww.successfactors.eu%252Fafricandev%26RelayState%3Dhttps%253A%252F%252Fperformancemanager.successfactors.eu")} transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/new.jpg')} />
                            </Left>
                            <Body>
                                <Text>New Performance Management System (PMS)</Text>
                                <Text note numberOfLines={1}>. . .</Text>
                            </Body>
                            <Right>
                                <Button onPress={() => Linking.openURL("https://sfp1.afdb.org/adfs/ls/idpinitiatedsignon.aspx?RelayState=RPID%3Dhttps%253A%252F%252Fwww.successfactors.eu%252Fafricandev%26RelayState%3Dhttps%253A%252F%252Fperformancemanager.successfactors.eu")} transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/logo-exit-1.jpg')} />
                            </Left>
                            <Body>
                                <Text>Separation Formalities</Text>
                                <Text note numberOfLines={1}>. . .</Text>
                            </Body>
                            <Right>
                                <Button onPress={() => Linking.openURL("http://exit.afdb.org/exit/user/login")} transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
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

export default UsefulLink