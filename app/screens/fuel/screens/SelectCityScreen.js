import React, {Component} from 'react';
import {Picker, StyleSheet, View} from 'react-native';
import {Constants} from "expo";

export default class SelectCityScreen extends Component {

    static navigationOptions = {
        title: null, header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            idCity: '0'
        };
    }

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Picker
                    iosHeader="Cidade"
                    selectedValue={this.state.idCity}
                    onValueChange={(idCity) => this.setState({idCity}, () => {
                        if (this.state.idCity ? '0' : navigate('Prices', {value: this.state.idCity})) {
                            navigate('Prices', {idCity: this.state.idCity});
                        }
                    })}
                    style={{flex: 1, color: 'white'}}
                    itemStyle={{backgroundColor: 'white', marginLeft: 0, paddingLeft: 15}}
                    itemTextStyle={{fontSize: 18, color: 'white'}}
                >
                    <Picker.Item value='0' label='Selecione uma cidade...'/>
                    <Picker.Item value='0540a843-9991-4af4-a306-edef97e85031' label='Alagoa Grande'/>
                    <Picker.Item value='9e803273-4b97-40aa-95b9-d27bd5b80169' label='Alagoinha'/>
                    <Picker.Item value='2ddaf3ec-07f5-4027-bfbf-1ad521937e18' label='Alhandra'/>
                    <Picker.Item value='ae7381f4-b6ac-448d-a0ea-4cc8b71dc0ff' label='Amparo'/>
                    <Picker.Item value='3eb8a4d0-2448-432d-a137-d082e3e25b0c' label='Araçagi'/>
                    <Picker.Item value='89210122-fa21-4bc8-a128-f178b7dcdb7e' label='Arara'/>
                    <Picker.Item value='0d314b24-98c8-46e1-ab31-a67643ba0ffb' label='Aroeiras'/>
                    <Picker.Item value='765e83a2-46ff-42b8-95a8-362e4e2720f4' label='Assunção'/>
                    <Picker.Item value='9acddbd2-3d2a-4655-ba21-9c8a261fcb61' label='Baía da Traição'/>
                    <Picker.Item value='4c3ce3b8-54e9-4df7-8717-559f3c5d73b4' label='Baraúna'/>
                    <Picker.Item value='ef41217a-bc5c-442b-95ce-f3fc42da189d' label='Barra de Santa Rosa'/>
                    <Picker.Item value='db634c05-a05a-492f-aaef-2b6deac74438' label='Bayeux'/>
                    <Picker.Item value='199a63f7-0ceb-4014-9db7-72b558157818' label='Belém'/>
                    <Picker.Item value='9c29aa8c-23a2-4b20-b89e-854c5f8adb25' label='Bernardino Batista'/>
                    <Picker.Item value='d42c6d0a-a2cb-4454-868e-ff19305f5d3d' label='Boa Ventura'/>
                    <Picker.Item value='ea542753-0346-4b88-8232-7bb9176d674b' label='Bonito de Santa Fé'/>
                    <Picker.Item value='06889c08-1799-4972-8805-ae422755a18b' label='Boqueirão'/>
                    <Picker.Item value='2f7315c8-9a25-4145-bd11-492eea497a04' label='Caaporã'/>
                    <Picker.Item value='d4db974f-3d30-4518-b58a-41c72d6cda9a' label='Cabaceiras'/>
                    <Picker.Item value='8233a73c-e03a-4166-8e5d-ada14778417c' label='Cabedelo'/>
                    <Picker.Item value='789fd8f1-c74c-4efd-a47e-1267cc583292' label='Cachoeira dos Índios'/>
                    <Picker.Item value='3c60a430-3b9a-4b0f-b826-f1e65de55f60' label='Cacimba de Dentro'/>
                    <Picker.Item value='4ce8800f-3847-4cff-982b-4b63e2bcfec7' label='Caiçara'/>
                    <Picker.Item value='8760d462-2d06-440e-ac69-d3b5e800ca40' label='Cajazeiras'/>
                    <Picker.Item value='506c22c5-ad2b-4d7d-9b30-b54db81a99a1' label='Cajazeirinhas'/>
                    <Picker.Item value='43c7b6f0-45a6-430f-ae7e-81c94dc33442' label='Caldas Brandão'/>
                    <Picker.Item value='b07f4dfe-04be-4dc4-94a7-3984e97e9f55' label='Camalaú'/>
                    <Picker.Item value='25c3eb85-c0d0-4b7b-88d7-2149ec226afb' label='Campina Grande'/>
                    <Picker.Item value='9f1c162d-1d18-4062-b639-53c64be32a5d' label='Capim'/>
                    <Picker.Item value='6d23d6c9-607a-4095-9dd0-3a51d9ee348b' label='Catingueira'/>
                    <Picker.Item value='d8b66f06-6fd6-4ba7-aced-de5aec0520d2' label='Catolé do Rocha'/>
                    <Picker.Item value='2f94b142-d3be-4c99-8ddc-4423cdb9bf84' label='Conceição'/>
                    <Picker.Item value='7d873ba6-cfe2-4c14-bb53-0c5c654369d6' label='Condado'/>
                    <Picker.Item value='50ffe102-4a94-4713-9486-19851f0c96a2' label='Conde'/>
                    <Picker.Item value='dda6bf2e-c11c-4b5e-956b-7bd7aba9d27a' label='Congo'/>
                    <Picker.Item value='f13e46ee-6200-453c-8ad9-7ce0be365358' label='Coremas'/>
                    <Picker.Item value='27d97d38-4ba0-4840-b680-3015523e775a' label='Cruz do Espírito Santo'/>
                    <Picker.Item value='d13307ec-2ddb-4e3c-afc4-a6c7b4014111' label='Cubati'/>
                    <Picker.Item value='4c77242f-9583-4cdd-886c-729776fc05d6' label='Cuité'/>
                    <Picker.Item value='aa846260-b4b7-4899-8429-850285219f7b' label='Cuité de Mamanguape'/>
                    <Picker.Item value='7a9517e5-52d3-4fc5-9449-a0f6711664fd' label='Curral de Cima'/>
                    <Picker.Item value='dfbb9863-9ef8-496c-b0ac-325bb57fd088' label='Damião'/>
                    <Picker.Item value='8fada179-d638-43e4-92f1-9cf6f03a4031' label='Desterro'/>
                    <Picker.Item value='554f60a9-54c6-4ca4-98de-880098a4c3ad' label='Diamante'/>
                    <Picker.Item value='bd0a2fe5-eca2-4b2b-8c84-e89d705b14d5' label='Duas Estradas'/>
                    <Picker.Item value='6390c68e-4db8-4adb-8588-c1ca36c8e435' label='Esperança'/>
                    <Picker.Item value='f0e8b51f-ef38-4ff1-9e12-61c631bf2b0e' label='Fagundes'/>
                    <Picker.Item value='13b6a26a-513d-492c-893a-862af5ebff59' label='Gado Bravo'/>
                    <Picker.Item value='8798b4b0-22dd-46a8-84a7-0d77aa4e2d9c' label='Guarabira'/>
                    <Picker.Item value='a5e09afa-9f28-4266-a64a-bdf6bea7e9cb' label='Gurinhém'/>
                    <Picker.Item value='b3c51dfb-a808-43a5-879b-f77531f3de07' label='Ibiara'/>
                    <Picker.Item value='08b81d44-f44e-4236-b393-7c0310ac17cc' label='Ingá'/>
                    <Picker.Item value='02d90d52-e8bd-4a2b-a383-bf2f02318671' label='Itabaiana'/>
                    <Picker.Item value='1de0a7b1-b938-4df3-974f-bd3419cee85d' label='Itaporanga'/>
                    <Picker.Item value='95a8edbe-c633-4e4f-92e9-8e367172cddc' label='Itapororoca'/>
                    <Picker.Item value='b92376d9-37d2-4c7c-8422-8cd9126228a9' label='Itatuba'/>
                    <Picker.Item value='ef0d377d-44b0-43d0-8dc2-a135a7c3d82c' label='Jacaraú'/>
                    <Picker.Item value='ddb23f07-067e-4021-a30b-dd20ce647ded' label='João Pessoa'/>
                    <Picker.Item value='4656f3db-b683-4a6a-b38f-2228a779f516' label='Joca Claudino'/>
                    <Picker.Item value='40052dd5-17b2-418d-8897-14a6ce124692' label='Juarez Távora'/>
                    <Picker.Item value='20499dbc-09b6-4b53-88f0-a65d2a049163' label='Juazeirinho'/>
                    <Picker.Item value='027c9ef2-a419-4fb7-a10f-6dcd10a24e0e' label='Junco do Seridó'/>
                    <Picker.Item value='06b10ca3-6144-4e56-a9f2-f4bf9005a7ea' label='Juru'/>
                    <Picker.Item value='18fdf0da-46a5-45a7-8df2-2cf31d1c56bc' label='Lagoa de Dentro'/>
                    <Picker.Item value='6b72cb97-7e0f-41bc-95b9-c6b092647df8' label='Livramento'/>
                    <Picker.Item value='37449fe8-7911-40ad-bdf4-cf895aaba830' label='Lucena'/>
                    <Picker.Item value='7058c811-d1a5-4eec-b4fe-6202c936b0eb' label='Malta'/>
                    <Picker.Item value='6b21d02a-68fe-4f64-acb4-2921823091de' label='Mamanguape'/>
                    <Picker.Item value='0ad982d7-376d-49fb-8e85-8f6df2a83b56' label='Manaíra'/>
                    <Picker.Item value='7c793a8d-58ad-4ca5-bdcb-a7fd527abbbf' label='Mari'/>
                    <Picker.Item value='41e312da-32a8-4d34-8bf8-8e36093df911' label='Massaranduba'/>
                    <Picker.Item value='d3b458dc-396a-41f2-8020-31c9c69e3501' label='Mataraca'/>
                    <Picker.Item value='28ff503c-7db1-4d73-af43-c4f6554ff2b4' label='Mogeiro'/>
                    <Picker.Item value='d67f2a0e-df92-4e4a-81f3-680b5ffc3092' label='Monte Horebe'/>
                    <Picker.Item value='3a20fe10-13dd-4880-bfd4-0e4e25cab479' label='Monteiro'/>
                    <Picker.Item value='d1fba67c-b4d1-4ea0-bb75-7bce3d5e088b' label='Nova Floresta'/>
                    <Picker.Item value='e828ccb1-b000-41ec-a0bc-839da87e0f50' label='Nova Palmeira'/>
                    <Picker.Item value='69fe8c0f-529e-43cc-b736-6fd32c89dfd9' label='Olho dÁgua'/>
                    <Picker.Item value='69c8b691-e7d5-4605-ae0f-85ff2ea511d2' label='Ouro Velho'/>
                    <Picker.Item value='2482a469-6103-453b-9d19-cc1261541064' label='Patos'/>
                    <Picker.Item value='4cf7ee7e-e144-428f-9d9f-a96a3b0a19e4' label='Pedra Branca'/>
                    <Picker.Item value='b8a3b839-61ff-4b79-a641-bcd1e347bbf0' label='Pedra Lavrada'/>
                    <Picker.Item value='8417c46b-73f0-44dc-af90-215937ced771' label='Pedro Régis'/>
                    <Picker.Item value='67079248-fd90-4cdf-addf-3ed5e9f6e985' label='Piancó'/>
                    <Picker.Item value='baea83f5-33f0-4e47-b249-8b3aaf666b16' label='Picuí'/>
                    <Picker.Item value='198fccb7-39c6-4388-8f7d-189e1481d88b' label='Pilar'/>
                    <Picker.Item value='7e2c423d-ffe4-4518-acc8-2fc6ef2f742b' label='Pirpirituba'/>
                    <Picker.Item value='37374445-79f0-4440-8ebb-344a7a5ae1fe' label='Pitimbu'/>
                    <Picker.Item value='55502e26-312b-458e-8f94-a477732d7c00' label='Pocinhos'/>
                    <Picker.Item value='535518fc-12db-470c-91d5-33e3269bcd72' label='Poço Dantas'/>
                    <Picker.Item value='82869eea-c134-48e5-9a19-44a725da64d6' label='Poço de José de Moura'/>
                    <Picker.Item value='97f07ca6-9a03-4d34-a1af-869f7c9db26f' label='Prata'/>
                    <Picker.Item value='8005151a-3b6d-45f6-8748-f4b192205b1f' label='Princesa Isabel'/>
                    <Picker.Item value='3156ade9-cfca-4628-bf19-68aaceb725fe' label='Queimadas'/>
                    <Picker.Item value='b6313902-1b01-464a-8edd-a4d42ee6228d' label='Quixabá'/>
                    <Picker.Item value='c80256b2-6c93-4adc-a0ea-2b5d822ff6b5' label='Remígio'/>
                    <Picker.Item value='0de968a2-1124-4b7e-8f7e-60ed1252987e' label='Riachão do Bacamarte'/>
                    <Picker.Item value='a8f0adf6-88cc-4a9c-a036-041a7380b5ba' label='Riachão do Poço'/>
                    <Picker.Item value='e7df3b20-d271-4d44-adcd-4476e63fd4a2' label='Riacho dos Cavalos'/>
                    <Picker.Item value='4770d6da-b138-4ef5-b190-d2a49530ef5f' label='Rio Tinto'/>
                    <Picker.Item value='4f4500bf-84b3-4a24-b99e-be849fee493a' label='Salgado de São Félix'/>
                    <Picker.Item value='d30de7f9-5aa4-4de1-88cc-fd0998b27dbf' label='Santa Helena'/>
                    <Picker.Item value='7605d4b2-3a1a-40b1-bf31-08e143a93c57' label='Santa Luzia'/>
                    <Picker.Item value='55d71c22-c35a-4730-bfe4-8f2b8f96be42' label='Santa Rita'/>
                    <Picker.Item value='8e46ed14-6738-4808-85c7-111a66f3e4bd' label='Santa Teresinha'/>
                    <Picker.Item value='0dd8c4d4-5871-47af-8bdf-b85fa83f9d07' label='São Bentinho'/>
                    <Picker.Item value='3590b930-28e9-484b-bf5a-e780ee788612' label='São Bento'/>
                    <Picker.Item value='b24239d9-5d13-4474-a3c7-7ff18701c95c' label='São João do Cariri'/>
                    <Picker.Item value='f3cade60-4550-467d-b7f5-31c62b876f6d' label='São João do Rio do Peixe'/>
                    <Picker.Item value='2119914e-f4ef-467c-9004-3217db627bd1' label='São José de Caiana'/>
                    <Picker.Item value='d707dcb9-48f0-422c-8ddf-de7fc1bb7488' label='São José de Espinharas'/>
                    <Picker.Item value='5c91feaf-301e-4d4d-8902-5f3bbc4c3056' label='São José de Piranhas'/>
                    <Picker.Item value='c7e181fa-4eb1-405d-9845-c76a12d2355e' label='São José do Sabugi'/>
                    <Picker.Item value='f181ee12-eaa5-49de-a1a7-2582f15babc4' label='São Mamede'/>
                    <Picker.Item value='7737f994-e3fa-42ba-9ea6-60503fcd0808' label='São Miguel de Taipu'/>
                    <Picker.Item value='52e57830-859d-4172-a434-1b3bfc109725' label='São Vicente do Seridó'/>
                    <Picker.Item value='d4c20500-b20b-4704-ba71-07c00a1ea994' label='Sapé'/>
                    <Picker.Item value='35f7e731-40e4-48d9-a69d-50672c6ac616' label='Serra Branca'/>
                    <Picker.Item value='dbbe06c7-0123-4e8a-aaab-6dd7043e3a52' label='Serra Redonda'/>
                    <Picker.Item value='3c5e075b-ef8b-4673-8d9f-0201818c679a' label='Sobrado'/>
                    <Picker.Item value='fc71ac15-8db7-45bd-816b-12a1168bbc8e' label='Soledade'/>
                    <Picker.Item value='0014e293-407a-4744-b6b4-41c3a63d2e16' label='Sossêgo'/>
                    <Picker.Item value='41aa968f-e686-46b3-bc9f-930ffc4bad15' label='Sousa'/>
                    <Picker.Item value='03a90fab-f0fb-4793-aaf6-87def0f8b708' label='Sumé'/>
                    <Picker.Item value='b33e6c88-2c96-42d5-9703-14057af20619' label='Tavares'/>
                    <Picker.Item value='fd347759-5541-49ca-895d-695b15127d44' label='Teixeira'/>
                    <Picker.Item value='5d957e11-365a-41b1-8a02-1b650d33d128' label='Triunfo'/>
                    <Picker.Item value='4ebd4a25-1d79-4596-8018-34f3537319b4' label='Uiraúna'/>
                    <Picker.Item value='1a022bf4-dad2-48ce-b3e2-db5bedcdac18' label='Várzea'/>
                    <Picker.Item value='8cfb7c10-7520-41ea-a79b-3bc1c462dff7' label='Vieirópolis'/>
                </Picker>
            </View>
        );
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
    picker: {
        color: 'white'
    }
});

