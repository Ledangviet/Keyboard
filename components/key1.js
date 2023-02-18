import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Key(props) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.number}>{props.number}</Text>
            <Text style={styles.text}>{props.value}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{ 
        display:'flex',
        justifyContent:'center',      
        marginLeft: 5,
        marginTop:3,     
        backgroundColor: '#fff',         
        elevation:3,
        borderRadius:5,
        width:35,
        height:55, 
    },
    text:{
        flex:3,
        textAlign:'center',
        fontSize:28,      
    },
    number:{  
        flex:1,            
        textAlign:'right',
        fontSize:13,
    },
});