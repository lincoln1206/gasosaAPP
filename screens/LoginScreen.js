import React from 'react';
import firebase from 'firebase'
import * as constant from '../constants/Constants'
import {h, totalSize, w} from '../constants/Layout';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Button, Container, Form, Input, Item, Label} from 'native-base'
import fb from "../firebase/Firebase";

const appLogo = require('../assets/images/icon.png');

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

    loginToFireBase = (email, password) => {
        const {navigate} = this.props.navigation;

        this.setState({isLogin: true});
        fb.userLogin(email, password)
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

                    <Button style={styles.button}
                            full
                            rounded
                            primary
                            onPress={() => this.loginToFireBase(this.state.email, this.state.password)}
                    >
                        <Text style={styles.text}>Login com Facebook</Text>
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
        backgroundColor: '#ff7f27',
        padding: 10,
        alignItems: 'center'
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

