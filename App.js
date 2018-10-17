import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading, Asset, Font, Icon} from 'expo';
import AppNavigator from './app/navigation/AppNavigator';
import * as constant from "./app/config/Constants";
import firebase from "firebase";

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };
    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./app/assets/images/icon.png'),
                require('./app/assets/images/splash.png'),
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.Ionicons.font,
                // to remove this if you are not using it in your app
                'space-mono': require('./app/assets/fonts/SpaceMono-Regular.ttf'),
            }),
        ]);
    };
    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };
    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
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
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === 'android' && <StatusBar barStyle="default"/>}
                    <AppNavigator/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
