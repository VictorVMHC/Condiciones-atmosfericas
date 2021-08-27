import React, {Component} from 'react';
import {Text, StyleSheet, View,Image,ImageBackground, Button,TouchableOpacity } from "react-native";


class Principal extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.view1}>
                    <Image
                    style={styles.logo}
                    source={{uri:'https://lh3.googleusercontent.com/proxy/1URHLUWc891qv0ZYUMtX6FxnX46qfnigIIbZRNlrlgwKag-BdP3Im7MqGcAVlid4TYhZUY7G9So-xIz3-eqgRgM6gqk4r5D8Z7j6WCPlG1t3Oiv2VzjhL3y3'}}/>
                </View>
                <View style={styles.view3}>
                    <ImageBackground  source={{uri:'https://blog.tecnoceano.com/wp-content/uploads/2017/09/Huracan-1-750x400.jpg'}} style={styles.backgroudImage}>
                    <View style={styles.tarjetas}>
                            <TouchableOpacity 
                            style={styles.buttons}
                            onPress={() => {
                                this.props.navigation.navigate('Noticias');
                             }}> <Text style={styles.titles} >Noticias </Text></TouchableOpacity>
                    </View>
                    </ImageBackground >
                </View>
                <View style={styles.view2}>
                    <ImageBackground  source={{uri:'https://programacion.net/files/article/article_02051_.jpg'}} style={styles.backgroudImage}>
                        <View style={styles.tarjetas}>
                            <TouchableOpacity
                             style={styles.buttons}
                            onPress={() => {
                               this.props.navigation.navigate('Consultas');
                            }}>
                                <Text style={styles.titles} >Consulta datos historicos</Text></TouchableOpacity>
                        </View>
                    </ImageBackground >
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons: {
        marginTop:'25%',
        backgroundColor: 'green',
        borderStyle:'dashed',
        borderRadius: 10,
        opacity: 0.8
    },
    view1:{
        backgroundColor: 'white',
        flex: .2
    },
    view2:{
      backgroundColor: 'gray',
      flex: .4,
    },
    view3:{
        backgroundColor: 'black',
        flex: .4
      },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titles: {
        margin: 10,
        fontFamily: 'Open Sans',
        fontSize: 30,
        shadowColor: 'black',
        fontWeight: 'bold',
    },
    logo: {
        marginLeft: 10,
        marginTop:5,
        width: 400,
        height: 115,
      },
      backgroudImage: {
        flex: 1,
        width: null,
        height: null,
        opacity: 0.7,
        alignItems: 'center',        
      },
    title: {
        fontFamily: 'Open Sans',
        fontSize: 30,
        alignItems: 'center',
        paddingLeft: 2
    },
    tarjetas: {
        flex: 1,
        alignItems: 'center'
        
    }
});


export default Principal;