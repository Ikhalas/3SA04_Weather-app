import React from 'react';
import Forcast from './Forcast';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forcast: {
                main: 'MAIN', description: 'description', temp: 0
             }
         }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.text} ><Text style={styles.font}>Zip code is {this.props.zipCode}.</Text></View>
                <Forcast {...this.state.forcast} />
                </ImageBackground>
            </View>
        );
    }
 }
    
const styles = StyleSheet.create({
    container: { paddingTop: 25, },
    backdrop: { width: '100%', height: '100%'},

    text: { 
        paddingTop : 20,
        flexDirection : 'column',
        justifyContent : 'space-between',
        alignItems: 'center'
    },

    font:{
        fontSize : 30,
        color :  '#000',
    }   
});

   