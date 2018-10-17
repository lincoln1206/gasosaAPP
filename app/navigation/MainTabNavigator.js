import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import TabBarIcon from '../components/TabBarIcon';
import MapScreen from '../screens/map/screens/MapScreen';
import Index_profile from '../screens/profile/index_profile';
import Index_fuel from '../screens/fuel/index_fuel';
import AboutScreen from '../screens/AboutScreen';
import TestScreen from '../screens/TestScreen';
import Colors from '../config/Colors';

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
                    ? `map${focused ? '' : '-outline'}`
                    : 'map'
            }
        />
    ),
};

const UserStack = createStackNavigator({
    User: Index_profile,
});

UserStack.navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `account-circle${focused ? '' : '-outline'}` : 'account-circle'}
        />
    ),
};

const FuelStack = createStackNavigator({
    Fuel: Index_fuel,
});

FuelStack.navigationOptions = {
    tabBarLabel: 'Preços',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `local-gas-station${focused ? '' : '-outline'}` : 'local-gas-station'}
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
            name={Platform.OS === 'ios' ? `info${focused ? '' : '-outline'}` : 'info'}
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
            name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
        />
    ),
};


export default createMaterialBottomTabNavigator({
    MapStack,
    FuelStack,
    UserStack,
    // AboutStack,
    //TestStack
}, {
    initialRouteName: 'MapStack',
    //activeColor: Colors.tabIconSelected,
    //inactiveColor: Colors.tabIconDefault,
    barStyle: {backgroundColor: Colors.tabBar},
});

