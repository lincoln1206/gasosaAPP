import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native'
import {Button, Container, Form, Input, Item, Label} from 'native-base'
import * as fb from "../dao/userDAO";
import * as firebase from "../../../../app/config/firebase";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Constants} from 'expo';
import {h, totalSize, w} from '../../../config/Layout';
import {connect} from 'react-redux';
import {loggedIn} from '../redux/actions'
import {bindActionCreators} from "redux";
import {MonoText as Text} from '../../../components/StyledText'

const appLogo = require('../../../assets/images/icon.png');

class Login extends React.Component {

    static navigationOptions = {
        title: null, header: null
    };

    constructor(props) {
        super(props);

        this.state = (
            {
                email: '',
                password: '',
                user: null
            }
        );
    }

    login(email, password) {
        const {navigate} = this.props.navigation;

        fb.userLogin(email, password)
            .then((result) => {
                (result) ? (navigate('Profile')) : alert('Ocorreu um erro ao fazer login!')
            })
            .then(
                this.props.loggedIn(firebase.auth.currentUser)
            )
            .catch((error) => {
                console.log(error);
            });


    };

    loginWithFacebook() {
        const {navigate} = this.props.navigation;

        fb.loginWithFacebook()
            .then(result => {
                if (result) navigate('Profile');
            });
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Container style={styles.container}>
                <Form style={{flex: 1}}>
                    <Image style={styles.icon} resizeMode="contain" source={appLogo}/>
                    <KeyboardAwareScrollView
                        enableOnAndroid
                        enableAutomaticScroll
                        enableResetScrollToCoords
                        keyboardOpeningTime={0}
                        extraHeight={30}
                        scrollEnabled={false}
                        resetScrollToCoords={{x: 0, y: 0}}
                    >
                        <Form style={{flex: 2}}>
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

                        </Form>
                    </KeyboardAwareScrollView>
                    <Button style={styles.button}
                            full
                            rounded
                            success
                            onPress={() => this.login(this.state.email, this.state.password)}
                    >
                        <Text style={styles.text}>Login</Text>
                    </Button>
                    <TouchableOpacity onPress={() => navigate('SingUp')} style={styles.touchable}
                                      activeOpacity={0.6}>
                        <Text style={styles.text}>Criar Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('ForgotPassword')} style={styles.touchable}
                                      activeOpacity={0.6}>
                        <Text style={styles.text}>Esqueci Minha Senha</Text>
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
        color: '#ffffffEE',
        textAlign: 'center',
        fontSize: totalSize(2),
        fontWeight: '600',
    },
    touchable: {
        flex: 2,
        marginTop: h(2),
        marginBottom: h(2),
    },
    inputForm: {
        width: 100,
        height: 50
    }
});

const mapStateToProps = (state) => {
    const {login} = state;
    return {login}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loggedIn
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

