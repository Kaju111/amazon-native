import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor='#9ee4d4' barStyle='dark-content'/>
      <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})