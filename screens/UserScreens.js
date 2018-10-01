import React from "react";
import ProfileNavigation from '../navigation/ProfileNavigation'

export default class UserScreens extends React.Component {
    static navigationOptions = {
        title: null, header: null
    };

    render() {
        return <ProfileNavigation />;
    }
}