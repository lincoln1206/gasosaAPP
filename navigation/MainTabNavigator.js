import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FuelScreen from '../screens/FuelScreen';
import AboutScreen from '../screens/AboutScreen';
import TesteScreen from '../screens/TesteScreen';

const MapStack = createStackNavigator({
    Map: MapScreen,
});

MapStack.navigationOptions = {
    tabBarLabel: 'Mapa',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-map${focused ? '' : '-outline'}`
                    : 'md-map'
            }
        />
    ),
};

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
        />
    ),
};

const FuelStack = createStackNavigator({
    Fuel: FuelScreen,
});

FuelStack.navigationOptions = {
    tabBarLabel: 'Preços',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-pricetag${focused ? '' : '-outline'}` : 'md-pricetag'}
        />
    ),
};

const AboutStack = createStackNavigator({
    About: AboutScreen,
});

AboutStack.navigationOptions = {
    tabBarLabel: 'Sobre',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
        />
    ),
};

const TesteStack = createStackNavigator({
    Teste: TesteScreen,
});

TesteStack.navigationOptions = {
    tabBarLabel: 'Sobre',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
        />
    ),
};

export default createBottomTabNavigator({
    MapStack,
    FuelStack,
    ProfileStack,
    AboutStack
});
