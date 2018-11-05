import React from 'react';
import {Image, StyleSheet, Text} from 'react-native'
import {Button, Container, Form, Label} from 'native-base'
import {totalSize} from '../../../config/Layout';
import {auth} from "../../../config/firebase";
import * as fb from "../api";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {loggedOut} from "../redux/actions";

class Profile extends React.Component {

    static navigationOptions = {
        title: null, header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            user: null
        }
    }

    componentWillMount() {
        this.obtainUser();
        this.obtainPhotoUrl();
    }

    obtainPhotoUrl() {
        const image = auth.currentUser.photoURL;
        const profile = require('../../../assets/images/profile-default.png');

        (image !== null) ? this.setState({image: image}) : this.setState({image: profile})

    };

    obtainUser() {
        const user = auth.currentUser;
        this.setState({user});
    }

    signOut(user) {

        const {navigate} = this.props.navigation;

        this.props.loggedOut(user);

        (fb.signOut())
            .then(result => {
                if (result) {
                    navigate('Login')
                }
                else {
                    alert('Ocorreu um erro ao sair!');
                }
            })
            .catch((error) => {
                alert(error);
            });
    }

    render() {

        return (
            <Container style={styles.container}>
                <Form>

                    <Image source={this.state.image}
                           style={styles.photo}/>
                    <Label style={styles.labelProfile}>Perfil</Label>
                    <Label style={styles.label}>Nome</Label>
                    <Text style={styles.text}>{auth.currentUser.displayName}</Text>
                    <Label style={styles.label}>Email</Label>
                    <Text style={styles.text}>{auth.currentUser.email}</Text>
                    <Button style={styles.button}
                            full
                            rounded
                            primary
                            onPress={() => this.signOut(this.state.user)}
                    >
                        <Text style={styles.text}>Sair</Text>
                    </Button>
                </Form>
            </Container>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff7f27',
        padding: 10,
    },
    button: {
        marginTop: 30,
        backgroundColor: '#FD0900',

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
    },
    photo: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2
    }
});

const mapStateToProps = (state) => {
    const {profile} = state;
    return {profile}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loggedOut
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);



