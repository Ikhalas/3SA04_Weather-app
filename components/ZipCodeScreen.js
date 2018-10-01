import { StyleSheet, FlatList, View, Text,TouchableHighlight,ImageBackground } from 'react-native';
import React from 'react';
    

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
    
const ZipItem = ({place, code, navigate}) => (
    <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>
    <View style={styles.zipItem}>
    <Text style={styles.zipPlace}>{place}</Text>
    <Text style={styles.zipCode}>{code}</Text>
    </View>
    </TouchableHighlight>
   )

const _keyExtractor = item => item.code


export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Choose a zip code</Text>),
        }
    }
  
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                    <View style={styles.back}>
                        <View style={styles.pad}>
                            <FlatList data={availableZipItems} keyExtractor={_keyExtractor} 
                            renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}/>
                        </View>
                    </View>    
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backdrop: { width: '100%', height: '100%'},

    pad: { 
        paddingTop: 110
    },

    zipItem: {
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent:'space-between', 
        backgroundColor: 'black',
        opacity:0.5,

    },
    zipPlace: {
        textAlign:'left', 
        color:'white', 
        fontSize: 30 ,
        paddingLeft: 30,  
    },
    zipCode: {
        textAlign:'right', 
        color:'red', 
        fontSize: 30 ,
        paddingRight: 30 ,
    },
});