import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getRating } from '../utils/helper';
import PrimeLogo from '../assets/prime-logo.png'
import { ProductData } from '../data/ProductData';
import { useGlobalContext } from '../components/Context';


const ProductScreen = () => {

  // const {services} = useGlobalContext();
  // console.warn(services)


  const [data, setData] = useState(undefined)

  const getAPIData = async () => {
    const url = "http://localhost:5000/product"
    let result = fetch(url)
     result = await result.json()
     console.warn(result)
     setData(result)
  }

  useEffect(()=>{
    getAPIData()
  },[])



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagline}>
        Price and other details may vary based on product asize and colour.
      </Text>

        {
          data ? <View>Hello</View> 
              :
          <Text>Not</Text>
        }


      {/* { 
      ProductData.map((item) =>{
          const{productName, rating, ratingCount, price, crossOutText, deliveryBy, image} = item
          return<View style={styles.productSection}>
        <View style={styles.productImgSection}>
          <Image style={styles.productImg} source={image} />
        </View>
        <View style={styles.productDetailSection}>
          <Text style={styles.sponsored}>Sponsored</Text>
          <Text style={styles.productName}>
            {productName}
          </Text>
          <View style={styles.row}>
            <Text style={styles.rating}>{rating}</Text>
            {getRating(item.rating)}
            <Text style={styles.ratingCount}>{ratingCount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price}>₹ {price}</Text>
            <Text style={styles.mrp}>M.R.P.</Text>
            <Text style={styles.crossout}>₹ {crossOutText}</Text>
            </View>
            <Text style={styles.cashback}>Up to 5% cashback with Amazon Pay Credit card</Text>
            <Image source={PrimeLogo} style={styles.logo}/>
            <Text style={styles.cashback}>FREE Delivery by {deliveryBy}</Text>
        </View>
      </View>
})
      }
       */}
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tagline: {
    fontSize: 11,
    color: 'gray',
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 15,
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center'
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  productImg: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  sponsored: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 5,
  },
  productName: {
    fontSize: 12,
    color: 'black',
    lineHeight: 18,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2
  },
  rating:{
    fontSize: 10,
    color: '#017185',
    marginRight: 5,
  },
  ratingCount:{
    fontSize: 10,
    color: '#017185',
    marginLeft: 5
  },
  price:{
    fontSize: 16,
    color: '#000000'
  },
  mrp:{
    fontSize: 10,
    color: 'grey',
    marginHorizontal: 5
  },
  crossout:{
    fontSize: 10,
    color: 'grey',
    textDecorationLine: "line-through"
  },
  cashback:{
    fontSize: 9,
    marginVertical: 2
  },
  logo:{
    height:16,
    width:42,
    marginVertical:3
  }
});
