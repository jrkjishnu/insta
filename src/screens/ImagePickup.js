
import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, View ,TouchableOpacity,Image,ImageProps, FlatList, TouchableHighlight} from 'react-native'
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

const ImagePickup = ()=>{
    const datas = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg","https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg","https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg","https://media.istockphoto.com/photos/beautiful-landscape-in-park-with-tree-and-green-grass-field-at-picture-id1021170914?s=612x612","https://media.istockphoto.com/photos/colorful-sunset-at-davis-lake-picture-id1184692500?s=612x612","https://media.istockphoto.com/photos/the-way-forward-picture-id1144462787?k=20&m=1144462787&s=612x612&w=0&h=QTQZlOugjhRyxN6yqPVhNxOVLbXOGE83rFQ37EiA4Tk=","https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg","https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_960_720.jpg","https://media.istockphoto.com/photos/mountain-peak-zugspitze-summer-day-at-lake-eibsee-near-garmisch-picture-id1042404662?s=612x612"]
const topRef = useRef()
const thumbRef = useRef()
const [Activeindex,setActiveIndex] = useState(0)
const [data,setData] = useState(["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg","https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"])
    const [sizeError,setSizeError] = useState(false)
    const [widthError,setWidthError] = useState(false)
    const lauchCamera = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
          }).then(image => {
            if(image && image.size > 3000000)
            {
             setSizeError(true)
            }
            else{
                setSizeError(false)
            }
            console.log("image",image);
            //image.size > 75000 ? setSizeError(true):setSizeError(false)
            (image.cropRect.width > 700 || image.cropRect.width >700) ? setWidthError(true):setWidthError(false)
            if(!(image.cropRect.width > 700 || image.cropRect.width >700) && !(image.size > 3000000))
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
                height: 300,
                cropping: true
              }).then(images => {
                    console.log("fi",images)
                //    console.log(images.cropRect.width > 500);
                   if(images && images.size > 1000000)
                   {
                    setSizeError(true)
                   }
                   else{
                       setSizeError(false)
                   }
                //images.size > 75000 ? setSizeError(true):setSizeError(false)
                (images.width > 500 || images.width >500) ? setWidthError(true):setWidthError(false)
                if(!(images.width > 500 || images.width >500) && !(images.size > 100000))
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
const scrollToActiveIndex = (index)=>{
    setActiveIndex(index)
    topRef?.current?.scrollToOffset({
        offset:(index)*491,
        animated:true
    })
    // if(index*(100+10)-100/2 > 491/2){
    //     thumbRef?.current?.scrollToOffset({
    //         offset:(ndex*(100+10)-491/2)
    //     })
    // }
}
    return(
        <View style={styles.container}>
            <FlatList
            ref={topRef}
               data={data}
               renderItem= { ({item}) => (
                <Image source={{ uri: item }} style={{width:491,height:720}} />
               )}
               showsHorizontalScrollIndicator={false}
               keyExtractor={item=>item}
               horizontal
               pagingEnabled
               onMomentumScrollEnd={ev=>{
                scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x/400))
               }}
               />
               <FlatList
               ref={thumbRef}
               data={data}
               renderItem= { ({item,index}) => (
                   <TouchableOpacity onPress={()=>scrollToActiveIndex(index)}>
                <Image source={{ uri: item }} style={{width:100,height:100,bottom:0,borderRadius:20,margin:10,borderWidth:2,
                borderColor:Activeindex === index ? 'white':'transparent'
                }} />
                </TouchableOpacity>
               )}
               showsHorizontalScrollIndicator={false}
               keyExtractor={item=>item}
               horizontal
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
      error:{
        marginLeft:68,
        fontSize:19,
        color:'red'
    }
})

export default ImagePickup