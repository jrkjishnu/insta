import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View ,TouchableOpacity,Image,ImageProps, FlatList, TouchableHighlight} from 'react-native'
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

const Gallery = ()=>{
    const [data,setData] = useState([])
    const [sizeError,setSizeError] = useState(false)
    const [widthError,setWidthError] = useState(false)
    const lauchCamera = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            if(image && image.size > 75000)
            {
             setSizeError(true)
            }
            else{
                setSizeError(false)
            }
            console.log("image",image);
            //image.size > 75000 ? setSizeError(true):setSizeError(false)
            (image.cropRect.width > 700 || image.cropRect.width >700) ? setWidthError(true):setWidthError(false)
            if(!(image.cropRect.width > 700 || image.cropRect.width >700) && !(image.size > 75000))
            {
                setData([...data,image.path])
            }
          }).catch((error)=>{
              console.log(error);
          });
    }

    const pickFromGallery = ()=>{
        try{
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
              }).then(images => {
                   console.log("fi",images)
                   console.log(images.cropRect.width > 500);
                   if(images && images.size > 75000)
                   {
                    setSizeError(true)
                   }
                   else{
                       setSizeError(false)
                   }
                //images.size > 75000 ? setSizeError(true):setSizeError(false)
                (images.cropRect.width > 500 || images.cropRect.width >500) ? setWidthError(true):setWidthError(false)
                console.log('daay',widthError,"siz",sizeError);
                if(!(images.cropRect.width > 500 || images.cropRect.width >500) && !(images.size > 75000))
            {
                setData([...data,images.path])
            }
              }).catch((error)=>{
              console.log(error);
          });
        }
        catch(error){
            //console.log("err",error);
        }
    }
    return (<View style={styles.container}>
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
               keyExtractor={item=>item}
               />
        <Pressable
        style={styles.buttonStyle}
        onPress={() => {lauchCamera()}}>
        <Text style={styles.buttonTextStyle}>Camera</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {pickFromGallery()}}>
        <Text style={styles.buttonTextStyle}>Pick from Gallery</Text>
      </Pressable>
      {widthError && <Text style={styles.error}>Please upload image in 500 * 500 pixels format </Text>}
      {sizeError && <Text style={styles.error}>Please upload files size less than 3Mb</Text>}
    </View>)
}

const styles = StyleSheet.create({
    container:{
        marginTop:300
    },
    profileImgContainer: {
        marginTop:40,
        marginLeft: 8,
        height: 100,
        width: 100,
        borderRadius: 40,
        overflow: 'hidden',
        marginBottom:90
      },
      profileImg: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        width: 100,
        borderRadius: 80,
      },
      error:{
          marginLeft:68,
          fontSize:19,
          color:'red'
      }
      ,
    buttonStyle: {
        height: 54,
        width: '60%',
        marginTop: 10,
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
})
export default Gallery;