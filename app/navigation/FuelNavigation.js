import PriceScreen from '../screens/fuel/screens/PriceScreen';
import SelectCityScreen from '../screens/fuel/screens/SelectCityScreen';

import {createStackNavigator,} from 'react-navigation';

const FuelNavigantion = createStackNavigator(
    {
        SelectCity: {screen: SelectCityScreen},
        Prices: {screen: PriceScreen}
    },
    {
        initialRouteName: 'SelectCity',
    }
);

export default FuelNavigantion;