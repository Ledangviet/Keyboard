import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Buoi2 from './components/buoi2';
import Dengt from './components/dengiaothong';
import KeyBoard from './components/keyboard';

export default function App() {

  return (
    <View style = {styles.container}>
     <KeyBoard/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
      display:'flex',
      height:'100%',
      backgroundColor:'#fff',
      justifyContent:'center'
  },

});
  

  


