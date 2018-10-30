import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class TestScreen extends Component {
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

    fetchMarkerData() {

        fetch('http://portaldacidadania.pb.gov.br/UtilidadePublica/Procon/Posto/ListarJson', {
            method: 'POST',
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    markers: responseJson.Localizacao,
                });
            })
            .catch((error) => {
                console.log(error);
            });
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