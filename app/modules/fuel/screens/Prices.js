import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Paragraph, Title,} from 'react-native-paper';
import {connect} from "react-redux";
import {data} from '../../../../App'
import {fetchMarkerData, goToLocation} from "../../map/dao/mapDAO";
import Icon from 'react-native-vector-icons/Entypo';
import Singleton_CityID from '../Singleton_CityID';
import {MonoText as Text} from '../../../components/StyledText'
import {WebView} from 'react-native';

let commonData = Singleton_CityID.getInstance();

class Prices extends Component {
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
            idCity: null,
            cityName: null,
            gas_stations: [],
            url: ''
        };
    }

    fetchData() {

        const state = data.getState();
        const idCity = state.fuelReducer.prices.idCity;
        const url = `http://portaldacidadania.pb.gov.br/UtilidadePublica/Procon/Posto/Listar?idCidadePesquisaSelecionada=${idCity}`;

        this.setState({url: url});
    }

    componentWillMount() {
        this.fetchData();
    }

    render() {

        return (
            <WebView
                source={{uri: this.state.url, removeHeader: true}}
                style={{marginTop: -80, marginBottom: -700, backgroundColor: 'transparent'}}
                automaticallyAdjustContentInsets={false}
                hideHeader={true}
            />);
    }
}

//FACTORY METHOD
function gasStationColor(color) {
    switch (color) {
        case 'Amarelo.png' :
            return 'yellow';
        case 'Verde.png'   :
            return 'green';
        case 'Vermelho.png':
            return 'red';
        default            :
            return 'gray'
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    marker: {
        flex: 1,
    },
    label: {
        color: '#FE5722'
    },
    container: {
        flex: 1,
 //       color: '#FFFFFF',
    },
    content: {
        padding: 4,
    },
    card: {
        margin: 4,
    },
});

const mapStateToProps = (state) => {
    const {prices} = state;
    return {prices}
};

export default connect(mapStateToProps)(Prices);

