import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Brand1 from '../assets/brand1.jpeg';
import Brand2 from '../assets/brand2.jpeg';
import Brand3 from '../assets/brand3.jpeg';
import Brand4 from '../assets/brand4.jpeg';

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
            <Text style={styles.title}>Brands of the day</Text>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={Brand1} style={styles.imgStyle} />
            <Text style={styles.brandsTitle}>
              Min. 20% off | CaratLane Diamond Neklace
            </Text>
          </View>
          <View style={styles.brands}>
            <Image source={Brand2} style={styles.imgStyle} />
            <Text style={styles.brandsTitle}>
              Min. 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={Brand3} style={styles.imgStyle} />
            <Text style={styles.brandsTitle}>
              Heels - Upto 50% OFF on Heeled Sandals, High Heel
            </Text>
          </View>
          <View style={styles.brands}>
            <Image source={Brand4} style={styles.imgStyle} />
            <Text style={styles.brandsTitle}>
              Sony 60W Blutooth SoundBar Speaker Audio Engine
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  imgStyle: {
    height: 150,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
    padding: 10,
  },
 
  row:{
    flexDirection: 'row'
  },
  brands:{
    width: '50%',
    padding: 10
  },
  brandsTitle:{
    fontSize: 12,
    color: 'black',
    margin: 4
  }
});
