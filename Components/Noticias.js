import React, {Component} from 'react';
import {Text, StyleSheet, FlatList, View} from "react-native";



class Noticias extends Component{
    constructor(props){
    super(props);
    this.state={
        data: '',
        cargados: false,
        loading: false,
        url: 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'
    }
}



    getDatos_filtrados = () => {
        this.setState({loading:true});

        fetch(this.state.url)
        .then(res => res.json())
        .then(res =>{
            this.setState({
                data: res.results,
                loading:false,
                cargados:true,
            })
        })

    };
    revisadatos = () =>{
        if(this.state.cargados){
            return (
                    <View>
                        <Text>{this.state.data[0].latitude}</Text> 
                    </View>
                   
            )
        }
    }
    componentDidMount(){
        this.getDatos_filtrados();
    }
    render(){
        if(this.state.loading){
            return(
                <View>
                    <Text> Cargando datos</Text>
                </View>
            );
        }
        return(
            <View style={styles.view0}>
                <FlatList
                    data={this.state.data}
                    renderItem={
                        ({item}) => 
                            <View style={styles.view}>
                                <View style={styles.viewH}>
                                    <Text style={styles.title}>Estado: {item.state} </Text>
                                    <Text style={styles.title}>Municipio: {item.name} </Text>
                                </View>
                                <View style={styles.viewB}>
                                    <View style={styles.viewB1}>
                                        <Text style={styles.bodyT}>Probabilida de lluvia: {item.probabilityofprecip} </Text>
                                        <Text style={styles.bodyT}>Humedad: {item.relativehumidity} </Text>
                                    </View>
                                    <View style={styles.viewB2}>
                                        <Text style={styles.bodyT}>Temperatura</Text>
                                        <Text style={styles.numeroT}>{item.tempc}°</Text>
                                    </View>                        
                                </View>
                                <View style={styles.viewF}>
                                    <Text style={styles.title}>Clima: {item.skydescriptionlong} </Text>
                                </View>
                            </View>
                        }
                />
            </View>

            
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Open Sans',
        fontSize: 15,
        alignItems: 'center',
        paddingLeft: 2,
        color: 'white',
        marginLeft: 20,
    },
    bodyT: {
        fontFamily: 'Open Sans',
        fontSize: 25,
        alignItems: 'center',
        paddingLeft: 2,
        color: 'black',
        marginLeft: 5,
    },
    numeroT:{
        fontFamily: 'Open Sans',
        fontSize: 40,
        textAlign: 'center',
        paddingLeft: 2,
        color: 'black',
        marginLeft: 5,
    },
    view0: {
        flex: 1,
    },
    view: {
        flex: 0.4,
        borderRadius: 15,
        backgroundColor: 'green',
        margin: 10,

    },
    viewH: {
        flex: 0.2,
        backgroundColor: 'gray',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
    },
    viewB: {
        flex: 0.6,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row'
    },
    viewB1: {
        flex: 0.6,       
    },
    viewB2: {
        flex: 0.4,
    },
    viewF: {
        flex: 0.2,
        backgroundColor: 'gray',
        marginLeft: 5,
        marginRight: 5,
        marginBottom:5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

    },
});


export default Noticias;