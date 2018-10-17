import React from 'react';
import {h, totalSize, w} from '../../../config/Layout';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Button, Container, Form, Input, Item, Label} from 'native-base'
import fb from "../../../config/Firebase";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Constants} from 'expo';

const Content = () => (
    <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        keyboardOpeningTime={0}
        extraHeight={Platform.select({android: 200})}
    >
        <View>
            {props.children}
        </View>
    </KeyboardAwareScrollView>
);

const appLogo = require('../../../assets/images/icon.png');

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        title: null, header: null
    };

    constructor(props) {
        super(props);

        this.state = (
            {
                email: '',
                password: '',
                isLogin: false
            }
        );
    }

    loginToFireBase = (email, password) => {
        const {navigate} = this.props.navigation;

        this.setState({isLogin: true});
        fb.userLogin(email, password)
            .then(result => {
                if (result) navigate('Profile');
                this.setState({isLogin: false});
            });
    };

    loginWithFacebook = () => {
        const {navigate} = this.props.navigation;

        this.setState({isLogin: true});
        fb.loginWithFacebook()
            .then(result => {
                if (result) navigate('Profile');
                this.setState({isLogin: false});
            });
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Container style={styles.container}>
                <Form>

                    <Image style={styles.icon} resizeMode="contain" source={appLogo}/>

                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autocorrect={false}
                            autoCapitalize='none'
                            onChangeText={(email) => this.setState({email})}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Senha</Label>
                        <Input
                            secureTextEntry={true}
                            autocorrect={false}
                            autoCapitalize='none'
                            onChangeText={(password) => this.setState({password})}
                        />
                    </Item>

                    <Button style={styles.button}
                            full
                            rounded
                            success
                            onPress={() => this.loginToFireBase(this.state.email, this.state.password)}
                    >
                        <Text style={styles.text}>Login</Text>
                    </Button>

                    <TouchableOpacity onPress={() => navigate('SingUp')} style={styles.touchable} activeOpacity={0.6}>
                        <Text style={styles.createAccount}>Criar Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('ForgotPassword')} style={styles.touchable}
                                      activeOpacity={0.6}>
                        <Text style={styles.forgotPassword}>Esqueci Minha Senha</Text>
                    </TouchableOpacity>

                </Form>
            </Container>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#FE5722',
        padding: 10,
        alignItems: 'center',
        paddingBottom: Constants.statusBarHeight,
    },
    icon: {
        width: w(70),
        height: h(30),
        marginTop: h(10),
        marginBottom: h(2)
    },
    button: {
        marginTop: h(2)
    },
    text: {
        color: 'white'
    },
    touchable: {
        flex: 1,
        marginTop: h(2),
        marginBottom: h(2),
    },
    createAccount: {
        color: '#ffffffEE',
        textAlign: 'center',
        fontSize: totalSize(2),
        fontWeight: '600',
    },
    forgotPassword: {
        color: '#ffffffEE',
        textAlign: 'center',
        fontSize: totalSize(2),
        fontWeight: '600',
    },
});

