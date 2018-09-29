import React from 'react';
import { Text } from 'react-native';
import Weather from './Weather';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Weather</Text>),
        }
    }
    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (<Weather zipCode={zipCode}/>);
    }
       
}
   