import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Button, Container, Form, Input, Item, Label} from 'native-base'
import fb from "../firebase/Firebase";
import {h, totalSize, w} from "../constants/Layout";
import {Constants, Icon} from 'expo';

export default class ForgotPasswordScreen extends React.Component {

    static navigationOptions = {
        title: null, header: null,
    };

    constructor(props) {
        super(props);

        this.state = (
            {
                email: ''
            }
        )
    }

    sendEmailWithPassword = (email) => {
        const {navigate} = this.props.navigation;

        fb.sendEmailWithPassword(email)
            .then(result => {
                if (result) navigate('Login');
            });
    };

    render() {

        const {navigate} = this.props.navigation;

        return (
            <Container style={styles.container}>
                <Form>
                    <TouchableOpacity onPress={() => navigate('Login')} style={styles.touchable}>
                        <Icon.Ionicons
                            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                            color="white"
                            size={25}
                        />
                    </TouchableOpacity>

                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autocorrect={false}
                            autoCapitalize='none'
                            onChangeText={(email) => this.setState({email})}
                        />
                    </Item>

                    <Button style={styles.button}
                            full
                            rounded
                            primary
                            onPress={() => this.sendEmailWithPassword(this.state.email)}
                    >
                        <Text style={styles.text}>Enviar email de recuperação de senha</Text>
                    </Button>

                </Form>
            </Container>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ff7f27',
        padding: 10,
        paddingTop: Constants.statusBarHeight,
    },
    button: {
        marginTop: 10
    },
    touchable: {
        alignSelf: 'flex-start',
        marginLeft: w(8),
        marginTop: h(4),
    },
    signIn: {
        color: '#ffffffEE',
        fontSize: totalSize(2),
        fontWeight: '700'
    },
    text: {
        color: 'white'
    },
});



