import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonComponent = ({title, onPress} : {title : string,
    onPress : ()=>void
}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button:{
        backgroundColor : '#B9DEEA',
        padding : 10,
        borderRadius : 20,
        margin : 15,
        marginTop : 20,
        borderWidth: 2
    },
    text:{
        alignSelf : 'center',
        fontSize : 20,
        fontWeight: 'bold',
    }
})