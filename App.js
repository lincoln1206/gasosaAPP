import React from 'react';
import {YellowBox} from 'react-native';
import {AppLoading, Asset, Font, Icon} from 'expo';
import AppNavigator from './app/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import _ from 'lodash';

export const data = store;

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

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
                ...Icon.Ionicons.font,
                'space-mono': require('./app/assets/fonts/SpaceMono-Regular.ttf'),
            }),
        ]);
    };
    _handleLoadingError = error => {
        console.warn(error);
    };
    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
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
                <Provider store={store}>
                    <AppNavigator/>
                </Provider>
            );
        }
    }
}


