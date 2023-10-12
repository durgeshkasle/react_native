import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from  'react-native';

const RestaurantCard = (props) => {
    return (
        <View style={styles.Cardcontainer}>

        <View>
          <Image style={styles.imageStyle} 
          source={props.imageSource}/>
          
        </View>
        




          <View style={styles.infoStyle}>


        {/* <Text style={styles.titleStyle}>Birla Niyaara </Text> */}
        <Text style={styles.price}>2CR - 3CR </Text>

        <Text style={styles.categoryStyle}>14, Dr Annie Besant Rd, Century Bazaar, Prabhadevi, Mumbai, Maharashtra 400025</Text>
       </View>
       </View>        
      
    )
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius =20;

  const styles = StyleSheet.create({
    Cardcontainer: {
      width: deviceWidth - 25 ,
     backgroundColor: 'white    ',
     height:250,

     borderRadius: 20,

    // ShadowColor: '0000',
    // shadowOffset: {
    //     width: 1,
    //     height:1,
    // },
    // shadowOpacity: 0.75,
    // elevation:9,
      
    },

    imageStyle: {
        height:130,
        width: deviceWidth -25,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9, 
    },
    titleStyle:{
        fontSize:20,
        fontWeight:'800',
    },
    categoryStyle:{
        fontWeight:'200',
    },
    infoStyle:{
        marginHorizontal: 10,
        marginVertical:5,

    },
    price:{
        color:"#cf24ed"
    }

});

export default RestaurantCard;