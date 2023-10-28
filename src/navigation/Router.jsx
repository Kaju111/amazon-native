import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import HomeScreen from '../screens/HomeScreen';
import { AppProvider } from '../components/Context';

const Stack = createStackNavigator();

const Router = () => {
  return (
    // <AppProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </AppProvider>
  );
};

export default Router;

const styles = StyleSheet.create({});
