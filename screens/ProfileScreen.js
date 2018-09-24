import firebase from "firebase";
import FirebaseLogin from "../FirebaseLogin";
import React, {Component} from "react";

const config = {
    apiKey: "AIzaSyDvVRO8vCXlSTbV1u5Xq20wQUv13FLR_tw",
    authDomain: "gasosa-6a891.firebaseapp.com",
    databaseURL: "https://gasosa-6a891.firebaseio.com",
    projectId: "gasosa-6a891",
    storageBucket: "gasosa-6a891.appspot.com",
    messagingSenderId: "706667096393"
};
firebase.initializeApp(config);

export default class ProfileScreen extends Component {
    render() {
        return (
            <FirebaseLogin login={user => console.warn(user)}
            />
        )
    }
}
