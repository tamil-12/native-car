import React, { useState } from 'react';
import { View, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Header from './Header'; // Adjust the path
import Main from './Main'; // Adjust the path
import Footer from './Footer'; // Adjust the path
// import styles from './style';
import { Text, TouchableOpacity,  Modal } from 'react-native';
import { BlurView } from 'react-native';
// import styles from './style';

function App() {
 
  return (
    <View  style={{backgroundColor:'black',height:'100%'}} >
    <Header/>
      <Main />
      <Footer />

      <StatusBar style="auto" />
    </View>
  );
}

export default App;
