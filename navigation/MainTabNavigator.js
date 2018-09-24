import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FuelScreen from '../screens/FuelScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
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
    Links: ProfileScreen,
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

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Configurações',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
        />
    ),
};

const FuelStack = createStackNavigator({
    Settings: FuelScreen,
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
    Settings: AboutScreen,
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

export default createBottomTabNavigator({
    HomeStack,
    FuelStack,
    ProfileStack,
    AboutStack
});
