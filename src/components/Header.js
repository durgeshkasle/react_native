import React from 'react';
import { View, StyleSheet, Image, Dimensions} from 'react-native';

const Header = () => {
    console.log()
    
   return (
      <View style={styles.container}>

        
      
        <Image style={styles.labelStyle} 
          source={require('../../assets/logo.png')}/>
          
     

        
        <Image style={styles.labelStyle1} 
        source={require('../../assets/notification.png')}/>
        
      </View>
    );
  };


  

  const styles = StyleSheet.create({
    container: {
      width:500,
      height: 90,
      backgroundColor: 'white',
      paddingBottom:20,
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-around",

      

    },
    labelStyle: {


        // marginLeft:30,
        // padding:30,
        
    },
    labelStyle1:{
      // alignItems:'right',
      // margin:30
      
      
    }
});

export default Header;