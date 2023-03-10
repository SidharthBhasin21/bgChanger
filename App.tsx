import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [bgColor,setBgColor] = useState('#FFFFFF')
  const [squareColor,setSquareColor] = useState('#FFFFFF')
  const [circleColor,setCircleColor] = useState('#FFFFFF')
  const [triangleColor,setTriangleColor] = useState('#FFFFFF')
  const [rectangleColor,setRectangleColor] = useState('#FFFFFF')


  const generateColor =()=>{
    const hexRange = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)];
    }
    return color
  }
  
  return (
    <>
      <StatusBar backgroundColor={bgColor}/>
      <View style = {[styles.container, {backgroundColor: bgColor}]}>
        <View style={styles.shapesContainer}>
          <TouchableOpacity
            onPress={()=>setSquareColor(generateColor())}
          >
            <View style={[styles.square , {backgroundColor: squareColor}]}  />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>setCircleColor(generateColor())}
          >
            <View style={[styles.circle , {backgroundColor: circleColor}]} />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          onPress={()=> setBgColor(generateColor())}
        >
          <View style= {styles.actionBtn}>
          <Text style = {styles.actionTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.shapesContainer}>
          <TouchableOpacity
            onPress={()=>setTriangleColor(generateColor())}
          >
            <View style={[styles.triangle , {borderBottomColor: triangleColor}]}  />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>setRectangleColor(generateColor())}
          >
            <View style={[styles.rectangle , {backgroundColor: rectangleColor}]} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionBtn:{
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal:40,
  },
  actionTxt:{
    color:'#FFFFFF',
    fontSize: 24,
    textTransform:'uppercase'
  },
  shapesContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    padding:15,
  },
  square:{
    height:150,
    width:150,
    marginHorizontal:20,
  },
  circle:{
    height:150,
    width:150,
    borderRadius:100,
    marginHorizontal:20
  },
  triangle:{
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 100,
    borderBottomWidth: 150,
    borderLeftWidth: 100,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    borderLeftColor: 'transparent', 
    
    marginHorizontal:20,
    
  },
  rectangle:{
    height:150,
    width:200,
    marginHorizontal:20,
  }

})