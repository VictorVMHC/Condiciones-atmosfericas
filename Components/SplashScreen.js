import React, {Component} from 'react';
import {Text, StyleSheet, View, ActivityIndicator, Image} from "react-native";


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
            <View>
                <Image
                    style={styles.imageS}
                    source= {{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_INECC.png'}}/>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Open Sans',
        fontSize: 30,
        alignItems: 'center',
        paddingLeft: 2
    },
    imageS:{
        marginTop: '50%',
        width: 400,
        height: 158,
    }
});

export default SplashScreen;