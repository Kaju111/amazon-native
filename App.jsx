import {StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/navigation/Router'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor='#9ee4d4' barStyle='dark-content'/>
      <Router/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})