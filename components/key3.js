import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Key3(props) {
    return (
        <View style = {styles.container}>
            <Text style={styles.text}>{props.value}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{ 
        justifyContent:'center',      
        marginLeft:6,
        marginTop:5,      
        backgroundColor: '#C4C3C3',         
        elevation:2,
        borderRadius:5,
        minWidth:35,
        width:'auto',
        height:55, 
        
    },
    text:{
        textAlign:'center',
        fontSize:24,      
    },    
});