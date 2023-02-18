import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Key1 from './key1';
import Key2 from './key2';
import Key3 from './key3';

export default function KeyBoard() {

    const Key1Values = [
        {key: 'Q',number:1,},
        {key: 'W',number:2,},
        {key: 'E',number:3,},
        {key: 'R',number:4,},
        {key: 'T',number:5,},
        {key: 'Y',number:6,},
        {key: 'U',number:7,},
        {key: 'I',number:8,},
        {key: 'O',number:9,},
        {key: 'P',number:0,},
    ]
    const Key2Values = [
        'A','S','D','F','G','H','J','K','L'
    ]
    const Key3Values = [
        'Z','X','C','V','B','N','M'
    ]
    return (
    <View style={styles.container}>
        <View style={styles.row1}>
            {Key1Values.map(e=> <Key1 value={e.key} number={e.number} />)} 
        </View> 
        <View style={styles.row2}>
            {Key2Values.map(e=> <Key2 value={e} />)} 
        </View>    
        <View style={styles.row3}>
            <Key3 value = '?123'/>
            {Key3Values.map(e=> <Key2 value={e} />)}
            <Key3 value = '.'/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        backgroundColor: '#EAEAEA',
        height:200,    
        elevation:1,
    },
    row1:{
        flex:1,
        display:'flex',
        flexDirection:'row',
    },
    row2:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        paddingLeft:17,
        paddingRight:17,
    },
    row3:{
        flex:1,
        display:'flex',
        flexDirection:'row',
    },
});

