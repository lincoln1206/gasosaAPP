import React from 'react';
import {Linking} from 'react-native';
import * as googleConfig from "../../../config/Constants";
import Cities from '../../../components/Cities'
import Images from "../../../components/Images";

export async function fetchMarkerData(latitude, longitude) {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&type=gas_station&rankby=distance&keyword="posto"or"gasolina"&key=${googleConfig.GOOGLE_API_KEY}`;
    console.log(url);

    const response = await fetch(url)
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
    const json = await response.json();

    console.log(json);

    return (json);
}

export async function fetchCity(latitude, longitude) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&types=(regions)&key=${googleConfig.GOOGLE_API_KEY}`;

    const response = await fetch(url, {});
    const json = await response.json();

    const city = (json.results[0].address_components[3].long_name).toString();
    console.log(city);
    const idCity = this.getIdCity(city);

    return (idCity);
}

export function getIdCity(cityName) {
    const cities = Cities.cities;

    for (index in cities) {

        const value = cities [index];

        if (value.label === cityName) {
            return (value.key);
        }
    }
}

//FACTORY METHOD
export function getMarkerIcon(markerName) {
    const images = Images.images;

    switch (markerName) {
        case 'markerPostoAmarelo.png':
            return images[1].image;
        case 'markerPostoVerde.png':
            return images[2].image;
        case 'markerPostoVermelho.png':
            return images[3].image;
        default :
            return images[0].image;
    }
}

export function goToLocation(latitude, longitude) {
    const url = `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${latitude},${longitude}`;
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Não foi possível abrir a url : ' + url);
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => console.error('An error occurred', err));
}

