import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput, ActivityIndicator} from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';

const countries = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila","Colima","Chiapas","Chihuahua","Distrito Federal","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"
];

class Consultas extends Component{
    constructor(props){
    super(props);
    this.state={
        estado: 'Aguascalientes',
        mensaje: '',
        resultados: '100',
        data: [],
        cargados: false,
        loading: false,
        url: 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'
    }
    }
    marcadoresC = () => {
        if(this.state.cargados){
            return this.state.data.map((data, i) => {
                return (
                    <Marker
                        key={i}
                        coordinate={{   latitude:  parseFloat(data.latitude), 
                                        longitude: parseFloat(data.longitude)
                                    }}
                        title={data.state}
                        description={data.skydescriptionlong}
                    />

                )
            })
        }
    };

    getResultados = inputText=> {
        this.setState({resultados: inputText});
    };
    getDatos_filtrados = () => {
        this.setState({loading:true});

        fetch(this.state.url + '?state=' + this.state.estado + '&pageSize=' + this.state.resultados)
        .then(res => res.json())
        .then(res =>{
            this.setState({
                data: res.results,
                loading:false,
                cargados:true,
            })
        })

    };
    render(){
        if(this.state.loading){
            return(
                <View style={styles.view}>
                    <Text style={styles.titleC}> Cargando datos</Text>
                    <ActivityIndicator  size="large" color="#00ff00"/>
                </View>
            );
        }
        return(
            <View style={styles.view}>
                <View style={styles.view1}>
                    <Text> Filtrar por estado</Text>
                    <SelectDropdown
                        data={countries}
                        defaultValueByIndex={0}
                        dropdownIconPosition = "right"
                        onSelect={(selectedItem, index) => {
                            this.setState({estado:selectedItem});
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        />
                    <TextInput 
                        placeholder="Cuantos registros deseas"
                        onChangeText={this.getResultados}
                    />
                    <View style={styles.viewbuttons} >
                        <TouchableOpacity 
                            style={styles.butons}
                            onPress={() => {
                                this.getDatos_filtrados();
                              }}
                        >
                            <Text>Consultar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.butons}>
                            <Text>Consultar sin filtro</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.view2}>
                    <MapView
                        showsUserLocation={true}
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                            latitude: 20.656694,
                            longitude: -103.325833,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        initialRegion={{
                            latitude: 20.656694,
                            longitude: -103.325833,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        maxZoomLevel={20}
                        minZoomLevel={5}
                        mapType={'satellite'}
                        zoomEnabled={true}>
                        <MapView.Marker
                            coordinate={{
                                latitude: 20.656694,
                                longitude: -103.325833,
                            }}
                        />
                        {this.marcadoresC()}
                    </MapView>
             
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Open Sans',
        fontSize: 30,
        alignItems: 'center',
        paddingLeft: 2
    },
    view:{
        flex:1,
    },
    view1:{
        flex:0.3,
        alignItems: 'center'
    },
    view2:{
        flex:0.7,
    },
    map: {
        flex: 1
    },
    viewbuttons: {
        marginLeft:'20%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    butons: {
        flex: .5,
    },
    titleC:{
        fontFamily: 'Open Sans',
        fontSize: 50,
        alignItems: 'center',
        paddingLeft: 2,
        color: 'black',
        marginLeft: 15,
        marginTop: '50%'
    },
});

export default Consultas;