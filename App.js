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
  // const data = [
  //   {Id:1,ten:'Sach Toan', loai: 'Sach'},
  //   {Id:2,ten:'Sach van', loai: 'Sach'},
  //   {Id:3,ten:'Conan', loai: 'Truyen'},
  //   {Id:4,ten:'Sherlock Holmes', loai: 'Tieu Thuyet'},
  //   {Id:5,ten:'Doraemon', loai: 'Truyen'}
  // ]

  // var timkiem = []
  // timkiem = data.find(e => (e.Id == 3));
  // console.log(timkiem)
  // //ham kiem tra some
  //  function kiemtra(ten) {
  //   if(data.some(e => e.ten === ten)) 
  //     return `Ton tai sach ten ${ten} trong danh sach`
  //    else return  `Khong Ton tai sach ten ${ten} trong danh sach`
  //  }
  //  //console.log(kiemtra('Sach van'))
  //  //console.log(kiemtra('Sach Sinh'))


  // console.log('------------------------')
  // var loaisach = []
  // var allloaisach = data.map(e => (e.loai))
  // loaisach = allloaisach.filter(function(e) {
  //   return loaisach.includes(e) ? '' : loaisach.push(e)   
  // })
  // //loaisach.map(a => console.log(a))
  

  // const ketqua = (a,b) => {
  //   return `Ket qua cua ${a}^2+ ${b}^2 la: ${a*a+b*b}`
  // }

  // //console.log(ketqua(2,3))

  // const sole = (a,b) => {
  //   let tong = 0;
  //   for(var i = a ; i <= b ; i++){
  //     if(i%2 == 1){
  //       tong ++;
  //       console.log(i);
  //     }
  //   }
  //   return `Tong cac so le tu ${a} den ${b} la ${tong}`;
  // }
  //console.log(sole(50,100));

  


