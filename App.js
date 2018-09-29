import React from 'react';

import { createStackNavigator } from 'react-navigation';
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';


const RootStack = createStackNavigator({
    Weather: WeatherScreen,
    ZipCode: ZipCodeScreen
},{
    initialRouteName: 'ZipCode',
})

export default class App extends React.Component {
    render() {
        return (
        <RootStack/>
        );
    }
}
