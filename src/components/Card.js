import React from 'react';
import { useState } from 'react';
import {View,Text, StyleSheet, Image,ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardComponent = ({data,navigation})=>{
    const [color,setColor] = useState('white')
    return (
    //     <TouchableOpacity style={{backgroundColor:'red',width:450}} onPress={()=>console.log('gg')}>
    // <View style={styles.card} onPress={()=>console.warn('hh')}>
    //     <View style={styles.img}>
    //     <Image style={styles.img} source={{uri:data.image}}></Image>

    //     </View>
    //     <View style={styles.text}>
    //     <Text onPress={()=>console.warn('hhn')}>jhbjhdsvds</Text>

    //     </View>
    //     <TextInput placeholder="dsfsfsdf"></TextInput>

    // </View>
    //         </TouchableOpacity>
    <View style={styles.card}>
        <TouchableOpacity onPress={()=>navigation.navigate('detail',{abc:'123',data})}>
        <View style={styles.img}>
        <ImageBackground style={styles.img}   imageStyle={{ borderRadius: 40}}
 source={{uri:data.image}}>
        <View >
        <MaterialCommunityIcons style={{marginLeft:420}} name="heart" color={color} size={40} onPress={()=>setColor(color === 'red'?'white':'red')}/>
        <Text style={styles.text} style={{marginTop:170,marginLeft:40,fontSize:40,color:'white'}} onPress={()=>navigation.navigate('detail',{abc:'123',data})}>Beauty</Text>
        <Text style={styles.text} style={{marginLeft:40,color:'white'}}>{data.title}</Text>
        </View>
        </ImageBackground>
        </View>
        </TouchableOpacity>
    </View>

    )
}

const styles = StyleSheet.create({
    card:{
        // marginTop:20,
        // borderRadius:40,
        // width:400,
        // height:180,
        // backgroundColor:'pink',
        // flex: 1,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // alignItems: 'flex-start'
        width:480,
        height:300,
        borderRadius:40,
        marginBottom:15
    },
    img:{
        //// width:190,
       // // height:300,
    //     borderRadius:20,
    //    width:'70%',
    //    height:'90%',
    //    margin:10
    width:'100%',
    height:'100%',
    borderRadius:40

    },
    textContainer:{
        position:'absolute',
    },
    text:{
        color:'white',
    }
})
export default CardComponent