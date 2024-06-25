import React from 'react';
import { SafeAreaView, View } from 'react-native';
 import NavigationStructue from './src/navigation/index';


const App = () => {

  return (
    <SafeAreaView style = {{flex:1}}>
      <NavigationStructue />
    </SafeAreaView>
  );
}


export default App;
