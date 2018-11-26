import React from 'react';
import {StyleSheet} from 'react-native'
import {Button, Container, Form, Input, Item, Label} from 'native-base'
import *as fb from "../dao/userDAO";
import {h, totalSize, w} from "../../../config/Layout";
import {Constants} from "expo";
import {connect} from 'react-redux';
import {MonoText as Text} from '../../../components/StyledText'

class SingUp extends React.Component {

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
        fb.createUser(name, email, password)
            .then(result => {
                if (result) navigate('Login');
                this.setState({isCreatingAccount: false});
            });
    };

    render() {

        console.log(this.props.navigation);

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
}

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

const mapStateToProps = (state) => {
    const {signUp} = state;
    return {signUp}
};

export default connect(mapStateToProps)(SingUp);





