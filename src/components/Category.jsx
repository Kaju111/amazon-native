import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cat1 from '../assets/fresh.jpeg'
import { Categories } from '../data/Categories'

const Category = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      {Categories.map(item=>(
        <View key={item.id} style={styles.category}>
          <Image source={item.image} style={styles.imgStyle}/>
      <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
      
    </ScrollView>
  )
}

export default Category

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffffff',
    padding:10
  },
  imgStyle:{
    height:50,
    width:50
  },
  title:{
    fontSize:10,
    color:'#2c4341'
  },
  category:{
    paddingHorizontal:8,
    alignItems: 'center'
  }
})