import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Constants, Location, MapView, Permissions} from 'expo';
import Icon from 'react-native-vector-icons/Entypo';
import * as map from '../api'
import * as option from '../../../config/Constants'
import {connect} from 'react-redux';
import {addMarker, setDefaultCity} from '../redux/actions'
import {bindActionCreators} from 'redux';

class Map extends Component {
    static navigationOptions = {
        title: null, header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.1,
                longitudeDelta: 0.05,
            },
            errorMessage: null,
            markers: [],
            idCity: null
        };
    }

    locationChanged(locations) {
        this.setState({markers: []});
        this._getLocationAsync();
    }

    async _getLocationAsync() {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);

        status !== 'granted' ? this.setState({errorMessage: 'Permissão para acessar localização foi negada.',}) : console.log("Permissão concedida!");

        let location = await Location.getCurrentPositionAsync({});

        console.log(location);

        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.05,
        };

        this.setState({location: location, region: region});
        this.fetchData(location.coords.latitude, location.coords.longitude);
    };

    async fetchData(latitude, longitude) {
        const idCity = await (map.fetchCity(latitude, longitude));
        const markers = await (map.fetchMarkerData(idCity));
        console.log(idCity);
        this.setState({markers: markers, idCity: idCity});
    }

    componentWillMount() {

        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, isso não vai funcionar como deveria no emulador. Tente no seu dispositivo!',
            });
        } else {
            this._getLocationAsync();
        }

        Location.watchPositionAsync(option.GEOLOCATION_OPTIONS, this.locationChanged());

    }

    dispatchData(markers, idCity) {
        this.props.setDefaultCity(idCity);

        markers.map((marker) => {
            this.props.addMarker({marker})
        });
    }

    render() {

        const markers = this.state.markers;
        this.dispatchData(markers, this.state.idCity);

        if (this.state.errorMessage) {
            return (
                <View style={styles.container}>
                    <Text style={styles.paragraph}>{this.state.errorMessage}</Text>
                </View>
            );
        }

        if (this.state.location) {
            return (
                <View style={styles.map}>
                    <MapView
                        style={styles.map}
                        initialRegion={this.state.region}
                        provider="google"
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        showScale={true}
                        showsCompass={true}
                        showsBuildings={true}
                        showsTraffic={false}
                        zoomEnabled={true}
                        zoomControlEnabled={true}
                        toolbarEnabled={true}
                        loadingEnabled={true}
                        mapType="standard"
                        followsUserLocation={true}
                        onPress={e => console.log(e.nativeEvent)}
                    >
                        {markers === 'undefined' ? 0 : markers.map((marker) => {

                            const coords = {
                                latitude: marker.Latitude,
                                longitude: marker.Longitude,
                            };

                            const markerName = marker.IconMarker.substr(29, marker.IconMarker.length);
                            const icon = map.getMarkerIcon(markerName);

                            return (
                                <MapView.Marker
                                    key={`${marker.id}${Date.now()}`}
                                    coordinate={coords}
                                    title={marker.NomePosto}
                                    image={icon}
                                    onCalloutPress={() => map.goToLocation(coords.latitude, coords.longitude)}
                                    style={styles.marker}>
                                    <MapView.Callout>
                                        <View style={styles.marker}>
                                            <Text style={styles.label}>{marker.NomePosto}</Text>
                                            <Text>Bandeira : {marker.Bandeira}</Text>
                                            <Text>Álcool : {marker.ValorAlcool} Álcool cartão
                                                : {marker.ValorAlcoolCartao}</Text>
                                            <Text>Diesel : {marker.ValorDiesel} Diesel cartão
                                                : {marker.ValorDieselCartao}</Text>
                                            <Text>Diesel S10 : {marker.ValorDieselS10} Diesel S10 cartão
                                                : {marker.ValorDieselS10Cartao}</Text>
                                            <Text>GNV : {marker.ValorGNV} GNV cartão : {marker.ValorGNVCartao}</Text>
                                            <Text>Gasolina : {marker.ValorGasolina} Gasolina cartão
                                                : {marker.ValorGasolinaCartao}</Text>
                                            <Text>Gasolina Aditivada : {marker.ValorGasolinaAditivada}</Text>
                                            <Text>Gasolina Aditivada cartão
                                                : {marker.ValorGasolinaAditivadaCartao}</Text>
                                            <Icon
                                                name={Platform.OS === "ios" ? "direction" : "direction"}
                                                color='#FE5722'
                                                size={25}
                                            >
                                                <Text style={styles.label}>Ir até</Text>
                                            </Icon>
                                        </View>
                                    </MapView.Callout>
                                </MapView.Marker>
                            );
                        })}
                    </MapView>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.paragraph}> </Text>
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    marker: {
        flex: 1,
    },
    label: {
        color: '#FE5722'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

const mapStateToProps = (state) => {
    const {map} = state;
    return {map}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addMarker,
        setDefaultCity
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Map);


