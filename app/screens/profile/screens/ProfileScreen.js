import React from 'react';
import {StyleSheet, Text} from 'react-native'
import {Button, Container, Form, Label} from 'native-base'
import firebase from 'firebase';
import {totalSize} from '../../../config/Layout';

export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: null, header: null,
    };

    render() {

        const {navigate} = this.props.navigation;

        return (
            <Container style={styles.container}>
                <Form>
                    <Label style = {styles.labelProfile}>Perfil</Label>

                    <Label style = {styles.label}>Nome</Label>
                    <Text style={styles.text}>{firebase.auth().currentUser.displayName}</Text>

                    <Label style = {styles.label}>Email</Label>
                    <Text style={styles.text}>{firebase.auth().currentUser.email}</Text>

                    <Button style={styles.button}
                            full
                            rounded
                            primary
                            onPress={() => firebase.auth().signOut().then(navigate('Login'))}
                    >
                        <Text style={styles.text}>Sair</Text>
                    </Button>

                </Form>
            </Container>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ff7f27',
        padding: 10,
    },
    button: {
        marginTop: 10
    },
    text: {
        color: 'white',
    },
    label: {
        color: '#ffffffEE',
        fontSize: totalSize(2),
        fontWeight: '700',
    },
    labelProfile: {
        marginTop: 10,
        color: '#ffffffEE',
        fontSize: totalSize(3),
        fontWeight: '700',
        flexDirection: 'row'
    }
});


