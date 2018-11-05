import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import TabBarIcon from '../components/TabBarIcon';
import TestScreen from '../modules/test/screens/TestScreen';
import Colors from '../config/Colors';
import {mapScreen} from '../modules/map/index';
import {forgotPasswordScreen, loginScreen, profileScreen, signUpScreen} from '../modules/profile/index';
import {pricesScreen, selectScreen} from "../modules/fuel/index";

const MapStack = createStackNavigator({
    Map: mapScreen,
});

MapStack.navigationOptions = {
    tabBarLabel: 'Mapa',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `map${focused ? '' : '-outline'}`
                    : 'map'
            }
        />
    ),
};

const UserStack = createStackNavigator(
    {
        Profile: {screen: profileScreen},
        Login: {screen: loginScreen},
        SingUp: {screen: signUpScreen},
        ForgotPassword: {screen: forgotPasswordScreen}
    },
    {
        initialRouteName: 'Login',
    }
);

UserStack.navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `account-circle${focused ? '' : '-outline'}` : 'account-circle'}
        />
    ),
};

const FuelStack = createStackNavigator(
    {
        Prices: {screen: pricesScreen},
        Select: {screen: selectScreen},

    },
    {
        initialRouteName: 'Select',
    }
);

FuelStack.navigationOptions = {
    tabBarLabel: 'Preços',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `local-gas-station${focused ? '' : '-outline'}` : 'local-gas-station'}
        />
    ),
};

const TestStack = createStackNavigator({
    Test: TestScreen,
});

TestStack.navigationOptions = {
    tabBarLabel: 'Teste',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `info${focused ? '' : '-outline'}` : 'info'}
        />
    ),
};

export default createMaterialBottomTabNavigator({
    MapStack,
    FuelStack,
    UserStack,
    //TestStack
}, {
    initialRouteName: 'MapStack',
    barStyle: {backgroundColor: Colors.tabBar},
});

