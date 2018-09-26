import firebase from "firebase";
import FirebaseLogin from "../FirebaseLogin";
import React, {Component} from "react";
import {StyleSheet, View} from 'react-native';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: null, header: null
    };

    state = {loggedIn: null};

    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDvVRO8vCXlSTbV1u5Xq20wQUv13FLR_tw",
                authDomain: "gasosa-6a891.firebaseapp.com",
                databaseURL: "https://gasosa-6a891.firebaseio.com",
                projectId: "gasosa-6a891",
                storageBucket: "gasosa-6a891.appspot.com",
                messagingSenderId: "706667096393"
            });
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            }
            else {
                this.setState({loggedIn: false});
            }
        });
    }

    render() {
        return (
            <View style = {styles.container}>
                <FirebaseLogin login={user => console.warn(user)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
