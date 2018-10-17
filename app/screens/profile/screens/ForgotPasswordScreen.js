import React from 'react';
import {StyleSheet, Text} from 'react-native'
import {Button, Container, Form, Input, Item, Label} from 'native-base'
import fb from "../../../config/Firebase";
//import styles from '../styles/styles'
import {h, totalSize, w} from "../../../config/Layout";
import {Constants} from "expo";

export default class ForgotPasswordScreen extends React.Component {

    static navigationOptions = () => ({
        title: null,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#FD0900'
        },
    });

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

        return (
            <Container style={styles.container}>
                <Form>

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
                            title={"Enviar email de recuperação de senha"}
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
        backgroundColor: '#FE5722',
        padding: 10,
        paddingTop: Constants.statusBarHeight,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#FD0900',
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



