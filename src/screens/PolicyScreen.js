import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Pressable,Linking, ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview'

const PolicyScreen = ({navigation}) => {
    
    const  IndicatorLoadingView =()=> {
        return (
          <ActivityIndicator
            color="#3235fd"
            size="large"
            style={styles.IndicatorStyle}
          />
        );
      }
    //const URL = "https://reactnativeforyou.com"
    
    return <WebView source={{ uri: 'https://reactnative.dev/' }} 
    renderLoading={IndicatorLoadingView}

    />;

//   return (
//     <View style={styles.screenContainer}>
//       <Text style={styles.title}>Profile Screen</Text>
//       <Pressable
//         style={styles.buttonStyle}
//         onPress={() => {        Linking.openURL(URL).catch((err) => console.error('An error occurred', err));
//     }}>
//         <Text style={styles.buttonTextStyle}>Go To Profile Screen</Text>
//       </Pressable>
//     </View>
//   );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
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
  IndicatorStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

export default PolicyScreen;