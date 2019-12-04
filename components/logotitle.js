import React, { Component } from 'react'

class LogoTitle extends Component {
    render() {
        return (
            <Image
                source={require('../assets/splash.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

export default LogoTitle