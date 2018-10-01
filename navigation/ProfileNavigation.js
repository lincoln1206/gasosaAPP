import ProfileScreen from '../screens/ProfileScreen';
import SingUpScreen from '../screens/SingUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

import {createStackNavigator,} from 'react-navigation';

const ProfileNavigantion = createStackNavigator(
    {
        Profile: {screen: ProfileScreen},
        Login: {screen: LoginScreen},
        SingUp: {screen: SingUpScreen},
        ForgotPassword:{screen : ForgotPasswordScreen}
    },
    {
        initialRouteName: 'Login',
    }
);

export default ProfileNavigantion;