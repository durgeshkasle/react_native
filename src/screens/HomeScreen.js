import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import Header from '../components/Header';

import Card from '../components/RestaurantCard';



const HomeScreen = () => {
  // console.log(props);
    return(
        <View style={styles.container}>

        
        <Header label="Aditya Birla"/>
        
     
        {/* <Text>Hello Durgesh Kasl</Text> */}
        <Card title="1" imageSource={require('../../assets/first.png')} />
        <Card title="2" imageSource={require('../../assets/second.png')} />
        <Card title="3" imageSource={require('../../assets/third.png')} />

        <StatusBar barStyle="dark-content" />
        <Header label="Aditya Birla"/>
        
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f0f5',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
  });

  export default HomeScreen;

