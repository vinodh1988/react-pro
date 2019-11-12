/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {RegisterRedux} from './redux/Map'


const App = () => {
  return (
    <>
      <StatusBar  />
      
      <View style={styles.container}>
        <ScrollView>
          <RegisterRedux></RegisterRedux>
              
        
              </ScrollView>
        </View>
      
    </>
  );
};

const styles = StyleSheet.create({
 container:{
   backgroundColor:'gray',
   flex:1
 }
});

export default App;
