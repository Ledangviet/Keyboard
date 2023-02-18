import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Key2(props) {
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
        backgroundColor: '#fff',         
        elevation:2,
        borderRadius:5,
        width:35,
        height:55, 
        
    },
    text:{
        textAlign:'center',
        fontSize:28,      
    },    
});