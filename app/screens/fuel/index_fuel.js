import React from "react";
import FuelNavigation from '../../navigation/FuelNavigation'

export default class Index_profile extends React.Component {
    static navigationOptions = {
        title: null, header: null
    };

    render() {
        return <FuelNavigation/>;
    }
}