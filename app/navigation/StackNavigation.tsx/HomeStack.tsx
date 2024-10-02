import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'


export type  homeParam={
    Home : undefined,
}
const HomeStack = () => {
    const stack = createNativeStackNavigator()
  return (
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home} />
      </stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})