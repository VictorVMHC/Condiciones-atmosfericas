import React, {Component} from 'react';
import {Text, StyleSheet} from "react-native";


class SplashScreen extends Component {
    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }
    componentDidMount(){
        setTimeout(() => {
            this.goToScreen('Principal')
        }, 5000, this)
    }
    render(){
        return(
            <Text style={styles.title} > SplashScreen </Text>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Open Sans',
        fontSize: 30,
        alignItems: 'center',
        paddingLeft: 2
    }
});

export default SplashScreen;