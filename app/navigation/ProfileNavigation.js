import ProfileScreen from '../screens/profile/screens/ProfileScreen';
import SingUpScreen from '../screens/profile/screens/SingUpScreen';
import LoginScreen from '../screens/profile/screens/LoginScreen';
import ForgotPasswordScreen from '../screens/profile/screens/ForgotPasswordScreen';

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