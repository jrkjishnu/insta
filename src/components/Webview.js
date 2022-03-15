import React, { useState } from 'react'
import { ActivityIndicator,View } from 'react-native';
import WebView from 'react-native-webview'

const Webviews = ()=>{
    const [visible,setVisible] = useState(true)
    const hideSpinner = ()=> {
        setVisible(false);
      }
    return (
        <View style={{ flex: 1 }}>
          <WebView
            onLoad={() => hideSpinner()}
            style={{ flex: 1 }}
            source={{ uri: 'https://reactnative.dev/' }}
          />
          {visible && (
            <ActivityIndicator
              style={{ position: "absolute", top: 300, left: 200 }}
              size="large"
            />
          )}
        </View>
      );
}

export default Webviews