/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView, 
   Text
 } from 'react-native';
 import Config from 'react-native-config';
 

 const App = () => { 
 
   return (
     <SafeAreaView>
       <Text>{`${"测试"}${Config.API_URL}`}</Text>
     </SafeAreaView>
   );
 };

  

 export default App;
