import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Dengt() {
    return (
    <View style = {styles.bg}>
            <View style = {styles.container}>
                <Text style = {styles.do}></Text>
                <Text style = {styles.vang}></Text>
                <Text style = {styles.luc}></Text>       
            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    bg:{       
        backgroundColor: 'pink',
        height:'100%',
        justifyContent:'center'
    },
    container: {    
        marginLeft: 'auto' , 
        marginRight: 'auto' ,  
        textAlign:'center',
        backgroundColor:'black',
        height:450,
        width:150,
        
    }, 
    do:{
        flex:1,
        backgroundColor:'red',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        borderRadius:150,
    },   
    vang:{
        flex:1,
        backgroundColor:'yellow',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        borderRadius:150,
    },
    luc:{
        flex:1,
        backgroundColor:'green',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        borderRadius:150,
    },    
  });