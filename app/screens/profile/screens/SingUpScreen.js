import React from 'react';
import {StyleSheet, Text} from 'react-native'
import {Button, Container, Form, Input, Item, Label} from 'native-base'
import fb from "../../../config/Firebase";
//import styles from '../styles/styles'
import {h, totalSize, w} from "../../../config/Layout";
import {Constants} from "expo";

export default class SingUpScreen extends React.Component {


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
                name: '',
                email: '',
                password: ''
            }
        )
    }

    createFireBaseAccount = (name, email, password) => {
        const {navigate} = this.props.navigation;

        this.setState({isCreatingAccount: true});
        fb.createFirebaseAccount(name, email, password)
            .then(result => {
                if (result) navigate('Profile');
                this.setState({isCreatingAccount: false});
            });
    };

    render() {

        return (
            <Container style={styles.container}>
                <Form>

                    <Item floatingLabel>
                        <Label>Nome</Label>
                        <Input
                            autocorrect={false}
                            autoCapitalize='none'
                            onChangeText={(name) => this.setState({name})}
                        />
                    </Item>

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
                            title={"Inscrever-se"}
                            onPress={() => this.createFireBaseAccount(this.state.name, this.state.email, this.state.password)}
                    >
                        <Text style={styles.text}>Inscrever-se</Text>
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





