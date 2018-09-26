import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import {Constants, Location, MapView, Permissions} from 'expo';
import gas_station from '../assets/images/gas_station.png'

const {height} = Dimensions.get('window');
const GEOLOCATION_OPTIONS = {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000};

export default class App extends Component {
    static navigationOptions = {
        title: null, header: null
    };

    state = {
        location: null,
        locations: {coords: {latitude: 0, longitude: 0}},
        errorMessage: null,
        hackHeight: height
    };
    locationChanged = (locations) => {
        const region = {
            latitude: locations.coords.latitude,
            longitude: locations.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.05,
        };
        this.setState({locations, region})
    };
    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({location});
        console.log(location);
        this.fetchMarkerData(location.coords.latitude, location.coords.longitude);
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }

        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    }

    fetchMarkerData(latitude, longitude) {
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=3000&type=gas_station&keyword="posto"or"gasolina"&key=AIzaSyAGxgKA5AO8z5JZXUMrhwDIDhPdYHoGZZg`;
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    markers: responseJson.results,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.fetchMarkerData();
    }

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
            return (
                <View style={styles.container}>
                    <Text style={styles.paragraph}>{text}</Text>
                </View>
            );
        }
        if (this.state.location) {

            return (
                <View style={{
                    width: '100%',
                    height: '100%',

                }}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: this.state.location.coords.latitude,
                            longitude: this.state.location.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
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
                        {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
                            const coords = {
                                latitude: marker.geometry.location.lat,
                                longitude: marker.geometry.location.lng,
                            };

                            return (
                                <MapView.Marker
                                    key={index}
                                    coordinate={coords}
                                    title={marker.name}
                                    image={gas_station}
                                />
                            );
                        })}
                    </MapView>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.paragraph}>.</Text>
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
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});