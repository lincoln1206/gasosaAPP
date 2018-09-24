import React, { Component } from 'react';
import {WebView} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: null, header: null
    };

    render() {
        return (
            <WebView
                source={{uri: 'https://www.google.com.br/maps/search/Postos+de+gasolina/@-7.0748569,-34.8459088,15z'}}
                style={{marginTop: -55 , marginBottom:-150 , backgroundColor: 'transparent'}}
                automaticallyAdjustContentInsets={false}
                hideHeader = {true}
            />
        );
    }
}