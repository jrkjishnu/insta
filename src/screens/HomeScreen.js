import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, Image, TouchableHighlight, FlatList} from 'react-native';
import axios from 'axios'
const HomeScreen = ({navigation}) => {
  const data = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg","https://media.istockphoto.com/photos/beautiful-landscape-in-park-with-tree-and-green-grass-field-at-picture-id1021170914?s=612x612","https://media.istockphoto.com/photos/colorful-sunset-at-davis-lake-picture-id1184692500?s=612x612","https://media.istockphoto.com/photos/the-way-forward-picture-id1144462787?k=20&m=1144462787&s=612x612&w=0&h=QTQZlOugjhRyxN6yqPVhNxOVLbXOGE83rFQ37EiA4Tk=","https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg","https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_960_720.jpg","https://media.istockphoto.com/photos/mountain-peak-zugspitze-summer-day-at-lake-eibsee-near-garmisch-picture-id1042404662?s=612x612"]
  const [list,setList] = useState()
  const handleList = ()=>{
    console.warn('p');
    fetch('http://192.168.0.181/posts/1')
  .then((response) => console.warn("gs",response)).catch((e)=>{
    console.warn(e);
  })
    // axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
    //     setList(res.data)
    // }).catch((err)=>{
    //   console.warn("err",err);
    // })
  }
  return (
    <View style={styles.screenContainer}>
            <Text style={styles.title}>Home Screen</Text>

      <FlatList
               data={data}
               renderItem= { ({item}) => (
                <TouchableHighlight
                style={[styles.profileImgContainer]}>
                <Image source={{ uri: item }} style={styles.profileImg} />
                </TouchableHighlight>
               )}
               showsHorizontalScrollIndicator={false}
               horizontal
               />
      <Pressable
        style={styles.buttonStyle}
        onPress={() => handleList()}>
        <Text style={styles.buttonTextStyle}>Go To Detail Screen</Text>
      </Pressable>
      {list && <Text>{list.id}</Text>}
      <View style={{display:'flex'}}>
        
      
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImgContainer: {
    marginTop:40,
    marginLeft: 8,
    height: 250,
    width: 250,
    borderRadius: 40,
    overflow: 'hidden',
  },
  profileImg: {
    flex: 1,
    flexDirection: 'row',
    height: 250,
    width: 250,
    borderRadius: 40,
  },
  screenContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 54,
    width: '80%',
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2EE59D',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: '#fdfdfd',
    fontWeight: '700',
  },
});

export default HomeScreen;