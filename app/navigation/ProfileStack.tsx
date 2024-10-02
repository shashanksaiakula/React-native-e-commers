import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Screen } from 'react-native-screens'
import ChangePassword from '../screens/ChangePassword'
import AddressScreen from '../screens/AddressScreen'
import Profile from '../screens/Profile'

const ProfileStack = () => {


    const ProfileStack = createNativeStackNavigator()
  return (
    <ProfileStack.Navigator screenOptions={{headerShown : false}} initialRouteName='ProileScreen'>
        <ProfileStack.Screen name='ProileScreen' component={Profile} />
        <ProfileStack.Screen name='changePassword' component={ChangePassword}/>
        <ProfileStack.Screen name='AddrssScreen' component={AddressScreen}/>
    </ProfileStack.Navigator>
    
  )
}

export default ProfileStack

const styles = StyleSheet.create({})