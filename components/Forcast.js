import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
    return (
        <View style={styles.container}>
            
                <Text style={styles.main}>{this.props.main}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <Text style={styles.temp}>{this.props.temp} °C</Text>
            
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

    main:{
        paddingTop : 30,
        fontSize : 40,
        color :  '#fff'
    },

    description:{
        paddingTop : 50,
        fontSize : 20,
        color :  '#fff'
    },

    temp:{
        paddingTop : 50,
        paddingBottom:20,
        fontSize : 40,
        color :  '#fff'
    }


});

   