import {Button, Image, Pressable, StyleSheet, Text, TextInput,View} from 'react-native'
import React, { useState } from 'react'

const DetailsScreen = ({route})=>{
    const [title,setTitle] = useState(route.params.data.title)
    const [id,setId] = useState(route.params.data.id)

    const {userId,image} = route.params.data
    console.warn("id",route.params.data.image);
    const handleSubmit = ()=>{
        console.warn('press');
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.warn(json));
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,textAlign:'center'}}>Update Details</Text>
            <Image source={{uri:image}} style={{width:390,height:'40%',borderRadius:10,marginLeft:8}}/>
            <TextInput style={styles.text} placeholder="userId" value={userId.toString(2)} ></TextInput>
            <TextInput style={styles.text} placeholder="Id" value={id.toString(2)} onChangeText={(e)=>setId(e)} keyboardType='numeric'></TextInput>
            <TextInput style={styles.text} placeholder="title" multiline = {true} onChangeText={(e)=>setTitle(e)}
numberOfLines = {Math.ceil(route.params.data.title.length/45)} value={title.toString(2)}  keyboardType='numeric'></TextInput>
<Pressable
        style={styles.buttonStyle}
        onPress={() => {handleSubmit()}}>
        <Text style={styles.buttonTextStyle}>Submit</Text>
      </Pressable>

        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        marginTop:90,
        height:550,
        margin:40,
        borderRadius:20

    },
    text:{
        fontSize:25,
        borderWidth:1,
        margin:10,
        borderRadius:10
    },
    buttonStyle: {
        height: 54,
        width: '60%',
        marginTop: 2,
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
      }
})
export default DetailsScreen