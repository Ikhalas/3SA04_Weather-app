import React from 'react';
import Forcast from './Forcast';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forcast: {
                main: 'main', description: 'description', temp: 0
             }
         }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
        this.fetchData()
        }
        }

    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
         .then((response) => response.json())
         .then((json) => {
           this.setState(
            {
               forcast: {
                 main: json.weather[0].main,
                 description: json.weather[0].description,
                 temp: json.main.temp
               }
            });
        })
         .catch((error) => {
            console.warn(error);
         });
        }
        componentDidMount = () => this.fetchData()

    render() {
        return (
            <View>
                <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                    <View style={styles.pad}>
                        <View style={styles.back}>
                            <Text style={styles.zip}>Zip code is {this.props.zipCode}.</Text>
                            <Forcast {...this.state.forcast} />
                    </View>        
                        </View>
                </ImageBackground>
            </View>
        );
    }
 }
    
const styles = StyleSheet.create({
    backdrop: { width: '100%', height: '100%'},

    zip: { 
        color :  '#fff',
        paddingTop : 30,
    },

    back:{
        flexDirection: 'column', 
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity:0.5,
       },

    pad: { 
        paddingTop: 130
    },
});

   