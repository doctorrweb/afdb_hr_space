import React from 'react';

import {
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import OnBoardingRow from '../containers/onBoardingRow';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#4A637D',
        flex: 1,
        padding: 10,
        paddingTop: STATUSBAR_HEIGHT,
    },
});

export default () => (
    <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
        />
        <ScrollView
            style={styles.scrollView}
        >
            <OnBoardingRow zIndex={100} />
            <OnBoardingRow zIndex={90} />
            <OnBoardingRow zIndex={80} />
            <OnBoardingRow zIndex={70} />
        </ScrollView>
    </View>
);
