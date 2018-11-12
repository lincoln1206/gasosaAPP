import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text , View} from 'react-native';
import {Button, Card, Paragraph, Title,} from 'react-native-paper';
import {connect} from "react-redux";
import {data} from '../../../../App'
import {fetchMarkerData, goToLocation} from "../../map/api";
import Icon from 'react-native-vector-icons/Entypo';

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
            gas_stations: []
        };
    }

    async fetchData() {
        this.setState({gas_stations: []});

        const state = data.getState();
        const idCity = state.fuelReducer.prices.idCity;
        const gas_stations = await(fetchMarkerData(idCity));

        const cityName = gas_stations[0].Cidade;

        this.setState({gas_stations: gas_stations, cityName: cityName});
    }

    componentWillMount() {
        this.fetchData();
    }

    render() {

        return (
            <ScrollView>
                <View style = {styles.container}>
                    <Title>  {this.state.cityName}</Title>
                    {
                        this.state.gas_stations.map((gas_station) => (
                            <Card
                                key={`${gas_station}${Date.now()}`}
                                style={[styles.card, {backgroundColor: gasStationColor(gas_station.IconMarker.substr(40, gas_station.IconMarker.length))}]}>
                                <Card.Content>
                                    <Title>{gas_station.NomePosto}</Title>
                                    <Paragraph>Bandeira : {gas_station.Bandeira}</Paragraph>
                                    <Paragraph>Álcool : {gas_station.ValorAlcool} Álcool cartão
                                        : {gas_station.ValorAlcoolCartao}</Paragraph>
                                    <Paragraph>Diesel : {gas_station.ValorDiesel} Diesel cartão
                                        : {gas_station.ValorDieselCartao}</Paragraph>
                                    <Paragraph>Diesel S10 : {gas_station.ValorDieselS10} Diesel S10 cartão
                                        : {gas_station.ValorDieselS10Cartao}</Paragraph>
                                    <Paragraph>GNV : {gas_station.ValorGNV} GNV cartão
                                        : {gas_station.ValorGNVCartao}</Paragraph>
                                    <Paragraph>Gasolina : {gas_station.ValorGasolina} Gasolina cartão
                                        : {gas_station.ValorGasolinaCartao}</Paragraph>
                                    <Paragraph>Gasolina Aditivada : {gas_station.ValorGasolinaAditivada}</Paragraph>
                                    <Paragraph>Gasolina Aditivada cartão
                                        : {gas_station.ValorGasolinaAditivadaCartao}</Paragraph>
                                </Card.Content>
                                <Card.Actions>
                                    <Button onPress={() => goToLocation(gas_station.Latitude, gas_station.Longitude)}>
                                        <Icon
                                            name="direction"
                                            color='#FE5722'
                                            size={25}
                                        >
                                            <Text style={styles.label}>Ir até</Text>
                                        </Icon>
                                    </Button>
                                </Card.Actions>
                            </Card>
                        ))}
                </View>
            </ScrollView>);
    }
}


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

