import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Button, Container, Form, Input, Item, Label} from 'native-base'
import fb from "../firebase/Firebase";
import {h, totalSize, w} from "../constants/Layout";

export default class SingUpScreen extends React.Component {


    static navigationOptions = {
        title: null,  header: null,
    };

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
        const {navigate} = this.props.navigation;

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
                            primary
                            onPress={() => this.createFireBaseAccount(this.state.name, this.state.email, this.state.password)}
                    >
                        <Text style={styles.text}>Inscrever-se</Text>
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



