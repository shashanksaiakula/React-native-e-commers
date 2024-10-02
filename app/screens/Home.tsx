import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getItemList } from '../networkCall/ApiCalls'
import ButtonComponent from '../components/ButtonComponent'
import { signOut } from 'firebase/auth'
import { auth } from '../fireBase/firebaseConfig'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '../navigation/StackNavigation.tsx/NavigationType'
import MyStack from '../navigation/StackNavigation.tsx/MyStack'



const Home = () => {

  const navigation = useNavigation<StackNavigationProps>();

  const [data , setData] = useState("")

  useEffect(()=>{
    responseData()
  },[data])
  const responseData = async()=>{
    try{
      const response = await getItemList("/products")
      if(response !== null){
        setData(JSON.stringify(response))
      }
    }catch(error){

    }
  }
  return (


    <View>
      <Text>{data}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})