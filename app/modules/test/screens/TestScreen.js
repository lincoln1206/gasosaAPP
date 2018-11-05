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

    constructor(props) {
        super(props);
        this.state = {
            gas_stations: []
        };
    }

    getId() {
        const {navigation} = this.props;
        const idCity = navigation.getParam('idCity', 'NO-ID');
        const url = `http://portaldacidadania.pb.gov.br/UtilidadePublica/Procon/Posto/Listar?idCidadePesquisaSelecionada=${idCity}`;
        return (url);
    }

    fetchData() {
        fetch("http://portaldacidadania.pb.gov.br/UtilidadePublica/Procon/Posto/ListarJson?idCidadePesquisaSelecionada=ddb23f07-067e-4021-a30b-dd20ce647ded", {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Length': '70',
                'Connection': 'keep-alive'
            }),
            body: JSON.stringify({
                idCidadePesquisaSelecionada: "ddb23f07-067e-4021-a30b-dd20ce647ded"
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    gas_stations: responseJson,
                });
                console.log(this.state.gas_stations)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentWillMount() {
        this.fetchData();
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