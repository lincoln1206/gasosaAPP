import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Button, Container, Form, Input, Item, Label} from 'native-base'
import fb from "../firebase/Firebase";
import {h, totalSize, w} from "../constants/Layout";

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

                    <TouchableOpacity onPress={() => navigate('Login')} style={styles.touchable}>
                        <Text style={styles.signIn}>{'<'} Login</Text>
                    </TouchableOpacity>

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
        fontSize: totalSize(3),
        fontWeight: '700',
    },
    text: {
        color: 'white'
    },
});



