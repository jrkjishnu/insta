import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Pressable, Image, TouchableHighlight, FlatList, ScrollView} from 'react-native';
import axios from 'axios'
import CardComponent from '../components/Card';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title} onPress={()=>console.warn('ddd')}>{title}</Text>
  </View>
);
const HomeScreen = ({navigation}) => {
  const [list,setList] = useState()
  const [merged,setMerge] = useState()
  const [listData,setListData] = useState([{id:1,title:"first"},{id:2,title:"second"},{id:3,title:"third"},{id:4,title:"fourth"}])
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) =>{
    const newData = json.map((item) =>{
      item["image"]=data[Math.floor(Math.random() * 10)]
      return item
    })
    setList(newData)
    console.warn("newData",list)
    // setList(json)
    //console.warn(json);
  //   for (var i=0;i<val.length;i++) {
  //     console.warn("dataaaa",val[i].userId);
  //  }
  } );
  },[])
  //console.warn("data",list);
  const data = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg","https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg","https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg","https://media.istockphoto.com/photos/beautiful-landscape-in-park-with-tree-and-green-grass-field-at-picture-id1021170914?s=612x612","https://media.istockphoto.com/photos/colorful-sunset-at-davis-lake-picture-id1184692500?s=612x612","https://media.istockphoto.com/photos/the-way-forward-picture-id1144462787?k=20&m=1144462787&s=612x612&w=0&h=QTQZlOugjhRyxN6yqPVhNxOVLbXOGE83rFQ37EiA4Tk=","https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg","https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_960_720.jpg","https://media.istockphoto.com/photos/mountain-peak-zugspitze-summer-day-at-lake-eibsee-near-garmisch-picture-id1042404662?s=612x612"]
  const handleList = ()=>{
    //listData.push(...listData,{image:'ddd'})
    // setListData({image:'122'},...listData)
    list.forEach((element)=>{
      element.aa="abc"
    })
    
    // setList(newData)
    //console.warn('p',listData);
  //   fetch('https://jrkjishnu.github.io/Data/data.json')
  // .then((response) => console.warn("gs",response)).catch((e)=>{
  //   console.warn("err",e);
  // })
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(json => console.warn(json))
    // axios.post('https://jrkjishnu.github.io/Data/data.json').then((res)=>{
    //   console.warn(res.data);
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
               showsHorizontalScrollI ndicator={false}
               horizontal
               />
      
      <Pressable
        style={styles.buttonStyle}
        onPress={() => handleList()}>
        <Text style={styles.buttonTextStyle}>Go To Detail Screen</Text>
      </Pressable>
      {/* <FlatList
        data={list}
        renderItem={ ({ item }) => (
          <Text style={{fontSize:40}} onPress={()=>navigation.navigate('detail',{abc:'123',item})}>{item.title}</Text>
        )}
        keyExtractor={item => item.id}
      /> */}
      <ScrollView>
        
      {list && (list.map((item)=>{
          return <CardComponent data={item} navigation={navigation}/>
      }))}
      </ScrollView>
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