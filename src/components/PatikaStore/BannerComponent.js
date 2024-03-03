// BannerComponent.js
import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const BannerComponent = ({ banner_urun }) => {
  return (
    <View style={styles.bannerContainer} key={banner_urun.title}>
      <Image style={styles.bannerstyle} source={{ uri: banner_urun.imgURL }} />
      <View style={styles.titleprice}>
        <Text style={styles.bannertitle}>{banner_urun.title}</Text>
        <Text style={styles.bannerprice}>{banner_urun.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    alignItems: 'center', // center items horizontally
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height / 6,
    
  },
  bannerstyle: {
    height: Dimensions.get('window').height / 3,
    width: '100%', // take full width
    borderRadius: 10,
  },
  titleprice: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  bannertitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  bannerprice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default BannerComponent;
