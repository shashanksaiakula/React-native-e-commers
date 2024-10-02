import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const EditTextComponent = ({placeHolder,onChangeText,value,isPassword, label}:{
    placeHolder: string,
    onChangeText :(value : string)=>void,
    value : string,
    isPassword : boolean,
    label? : string 
}) => {
  return (
    <>
    <Text style={styles.label}>{label}</Text>
    <View style={{borderWidth: 2,margin: 5, borderRadius : 20 }}>
      <TextInput value={value} onChangeText={onChangeText} style={styles.inputText} placeholder={placeHolder} placeholderTextColor={'gray'}/>
    </View>
    </>
  )
}

export default EditTextComponent

const styles = StyleSheet.create({
    inputText:{
    padding: 10,
    backgroundColor : 'white',
    borderRadius : 20 
    },label:{
        fontSize : 20,
        fontWeight : 'bold',
        alignSelf : 'center',
        color : "black"
    }
})