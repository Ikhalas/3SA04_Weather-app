import React from 'react';
import { Text } from 'react-native';
import Weather from './Weather';
import { Button } from 'react-native';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Weather</Text>),
            headerRight: (
                    <Button title="Select" onPress={() => navigation.navigate('ZipCode')}/>       
            )       
        }
    }
    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (<Weather zipCode={zipCode}/>);
    }
       
}

   