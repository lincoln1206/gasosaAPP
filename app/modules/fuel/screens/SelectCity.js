import React, {Component} from 'react';
import {Picker, StyleSheet, View} from 'react-native';
import Cities from '../../../components/Cities'
import {connect} from "react-redux";
import {removeAll, setIdCity} from "../redux/actions";
import {bindActionCreators} from "redux";
import {Constants} from 'expo';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import {checkLoginStatus} from "../../profile/api";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SelectCity extends Component {

    static navigationOptions = {
        title: null,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#FD0900'
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            gas_stations: [],
            idCity: 0,
            status: false
        };
    }

    selectCity(idCity) {
        const {navigate} = this.props.navigation;

        this.props.removeAll();
        this.props.setIdCity(idCity);

        (idCity !== null) ? ((navigate('Prices'))) : alert('Escolha uma cidade!');
        this.setState({idCity: 0, cityName: null, gas_stations: []})
    }

    checkStatus() {
        const status = checkLoginStatus();
        this.setState({status: status});
        console.log(this.state.status);
        return status
    }

    componentWillMount() {
        this.checkStatus()
    }

    render() {

        if (this.state.status === false) {
            return (
                <View style={styles.containerError}>
                    <Card
                        style={styles.cardError}>
                        <Card.Content>
                            <Title>Oops.. você precisar estar logado para acessar esse recurso!</Title>
                            <Paragraph>Faça login e clique no botão abaixo para recarregar página</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => this.checkStatus()}>
                                <Icon
                                    name={"reload"}
                                    color='#FE5722'
                                    size={25}
                                />
                            </Button>
                        </Card.Actions>
                    </Card>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Title>Cidades</Title>
                    <Card style={styles.card}>
                        <Paragraph>Selecione uma cidade....</Paragraph>
                        <Picker
                            iosHeader="Cidade"
                            selectedValue={this.state.idCity}
                            onValueChange={(idCity) => this.setState({idCity}, () => {
                                this.selectCity(this.state.idCity)
                            })}
                            style={styles.picker}
                            itemStyle={{backgroundColor: 'white', marginLeft: 0, paddingLeft: 15}}
                            itemTextStyle={{fontSize: 18, color: 'white'}}
                        >
                            {Cities.cities.map((item) => {
                                return (< Picker.Item label={item.label} value={item.key} key={item.key}/>);
                            })}
                        </Picker>
                    </Card>
                </View>
            );
        }
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FE5722',
        padding: 10,
        paddingBottom: Constants.statusBarHeight,
    },
    containerError: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE5722',
        padding: 10,
        paddingBottom: Constants.statusBarHeight,
    },
    picker: {
        flex: 1,
        color: 'white'
    },
    text: {
        color: 'black'
    },
    label: {
        color: '#FE5722'
    },
    content: {
        padding: 4,
    },
    card: {
        height: 145,
        justifyContent: 'center',
        margin: 4,
        backgroundColor: 'white'
    },
    cardError: {
        height: 145,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        backgroundColor: 'white'
    },
});

const mapStateToProps = (state) => {
    console.log(state.profileReducer.profile);
    const {selectCity} = state;
    return {selectCity}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setIdCity,
        removeAll
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);

