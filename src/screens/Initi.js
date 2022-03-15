import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, View ,TouchableOpacity,Image,ImageProps, FlatList, TouchableHighlight} from 'react-native'
const Initi = ()=>{
    return(
        <View style={styles.container}>

            <View style={{marginTop:400}}>

            <Pressable
        style={styles.buttonStyle}
        //onPress={() => {lauchCamera()}}
        >
        <Text style={styles.buttonTextStyle}>Camera</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        //onPress={() => {pickFromGallery()}}
        >
        <Text style={styles.buttonTextStyle}>Pick from Gallery</Text>
      </Pressable>
      </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
    },
    buttonStyle: {
        height: 54,
        width: '60%',
        marginTop:10,
        marginLeft:75,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
      },
      error:{
        marginLeft:68,
        fontSize:19,
        color:'red'
    }
})

export default Initi