import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Forecast extends React.Component {
    render() {
    return (
        <View style={styles.container}>
            
                <Text style={styles.font}>{this.props.main}</Text>
                <Text style={styles.font}>{this.props.description}</Text>
                <Text style={styles.font}>{this.props.temp} °C</Text>
            
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
                 flexDirection : 'column',
                 justifyContent : 'space-between',
                 alignItems: 'center'
                },

    backdrop: { width: '100%', height: '100%'},

    font:{
        fontSize : 50,
        color :  '#fff',

    },
});

   