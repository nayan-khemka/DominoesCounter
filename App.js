import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App(){
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const onPress2 = ()=> setCount(0);

  return (
    // <View>
    //   <Image />
    // </View>
    <View style={{backgroundColor:"#2770BF",height:"100%"}}>
      <Image
           source={{
             uri:'https://www.dominos.co.in/assets/header_bg.png',
           }}
           style={{width:"100%",height:"35%",marginBottom:10}}
           />
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={{fontWeight: "bold"}}>Order Count:</Text>
        {/* <br /> */}
        <Text style={{fontSize:70}}>{count}</Text>
        <Image
           source={{
             uri:'https://www.dominos.co.in/theme2/front/images/menu-images/sides_beverages.jpg',
           }}
           style={{width:200,height:200,borderColor:'black',borderWidth: 5}}
           />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{color:"white", fontWeight: "bold",fontSize: 16}}>PRESS HERE</Text>
      </TouchableOpacity>
    <TouchableOpacity
        style={styles.button}
        onPress={onPress2}
      >
        <Text style={{color:"white", fontWeight: "bold",fontSize: 16}}>Reset</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
    backgroundColor:"#2770BF",
    // justifyContent:"center",
    // alignContent:"center"
  },
  
  button: {
    // display:'inline-block',
    alignItems: "center",
    // alignContent:'center';
    backgroundColor: "red",
    // color:"white",
    padding: 5,
    alignContent:"center",
    // width:"55%",
    borderColor:"black",
    borderWidth:2,
    marginBottom:7,
    borderBottomEndRadius:10,
  },
  countContainer: {
    alignItems: "center",
    padding:10,
    marginBottom:50,
    backgroundColor:"#ffff",
    borderColor:"red",
    borderWidth: 3,
    // width:"50%",
    // background:URL("https://www.dominos.co.in/theme2/front/images/menu-images/red.png"),
  }
});
