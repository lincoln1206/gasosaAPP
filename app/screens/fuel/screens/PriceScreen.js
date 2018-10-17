import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class PriceScreen extends Component {
    static navigationOptions = () => ({
        title: null,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#FD0900'
        },
    });

    getId() {
        const {navigation} = this.props;
        const idCity = navigation.getParam('idCity', 'NO-ID');
        const url = `http://portaldacidadania.pb.gov.br/UtilidadePublica/Procon/Posto/Listar?idCidadePesquisaSelecionada=${idCity}`;
        return (url);
    }

    render() {


        return (
            <WebView
                source={{uri: this.getId(), removeHeader: true}}
                style={{marginTop: -190, marginBottom: -450, backgroundColor: 'transparent'}}
                automaticallyAdjustContentInsets={false}
                hideHeader={true}
            />);
    }
}

