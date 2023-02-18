import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Buoi2() {
    return (
    <View style = {styles.container}>
        <Text style = {styles.do}>Mau do</Text>
        <Text style = {styles.cam}>Mau cam</Text>
        <Text style = {styles.vang}>Mau vang</Text>
        <Text style = {styles.luc}>Mau luc</Text>
        <Text style = {styles.lam}>Mau lam</Text>
        <Text style = {styles.cham}>Mau cham</Text>
        <Text style = {styles.tim}>Mau tim</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {       
        textAlign:'center',
        backgroundColor:'black',
        height:'100%'
    }, 
    do:{
        flex:1,
        backgroundColor:'red',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    cam:{
        flex:1,
        backgroundColor:'orange',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    vang:{
        flex:1,
        backgroundColor:'yellow',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    luc:{
        flex:1,
        backgroundColor:'green',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    lam:{
        flex:1,
        backgroundColor:'blue',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    cham:{
        flex:1,
        backgroundColor:'gray',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    tim:{
        flex:1,
        backgroundColor:'purple',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
  });