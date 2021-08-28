import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const countries = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila","Colima","Chiapas","Chihuahua","Distrito Federal","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"
];

class Consultas extends Component{
    state={
        estado: '',
        resultados: '100',
    };


    getResultados = inputText=> {
        this.setState({resultados: inputText});
    };

    render(){
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
                        <TouchableOpacity style={styles.butons}>
                            <Text>Consultar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.butons}>
                            <Text>Consultar sin filtro</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.view2}>
                    <MapView
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
                        minZoomLevel={10}
                        mapType={'satellite'}
                        zoomEnabled={true}>
                        <MapView.Marker
                            coordinate={{
                                latitude: 20.656694,
                                longitude: -103.325833,
                            }}
                        />
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
    }
});

export default Consultas;