import React, {Component} from 'react';
import {Text, StyleSheet} from "react-native";

class Consultas extends Component{
    render(){
        return(
            <Text style={styles.title}>Principal </Text>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Open Sans',
        fontSize: 30,
        alignItems: 'center',
        paddingLeft: 2
    }
});


export default Consultas;