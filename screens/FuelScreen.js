import React, { Component } from 'react';
import {StyleSheet, WebView} from 'react-native';

export default class FuelScreen extends Component {
    static navigationOptions = {
        title: null, header: null
    };

    render() {
        return (
            <WebView
                source={{uri: 'http://portaldacidadania.pb.gov.br/UtilidadePublica/Procon/Posto/Listar?idCidadePesquisaSelecionada=ddb23f07-067e-4021-a30b-dd20ce647ded', removeHeader : 'topo'}}
                style={{marginTop: -70 , marginBottom:-450 , backgroundColor: 'transparent'}}
                automaticallyAdjustContentInsets={false}
                hideHeader = {true}
            />
        );
    }
}

