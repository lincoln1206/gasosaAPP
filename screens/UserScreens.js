import React from "react";
import ProfileNavigation from '../navigation/ProfileNavigation'
import * as constant from "../constants/Constants";
import firebase from 'firebase';

export default class UserScreens extends React.Component {
    static navigationOptions = {
        title: null, header: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: constant.FIREBASE_API_KEY,
            authDomain: constant.FIREBASE_AUTH_DOMAIN,
            databaseURL: constant.FIREBASE_DATABASE_URL,
            projectId: constant.FIREBASE_PROJECT_ID,
            storageBucket: constant.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: constant.FIREBASE_MESSAGING_SENDER_ID
        });
    };

    render() {
        return <ProfileNavigation/>;
    }
}