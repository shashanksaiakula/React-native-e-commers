import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import EditTextComponent from '../components/EditTextComponent'
import ButtonComponent from '../components/ButtonComponent'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../fireBase/firebaseConfig'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '../navigation/StackNavigation.tsx/NavigationType'

const SingUp = () => {


  const navigation = useNavigation<StackNavigationProps>();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, seConfirmPassword] = useState("")

  const createAccount= ()=>{
    if(name !== "" && password !=="" && confirmPassword !=="" && email !=="") {
      if(password=== confirmPassword) {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
          console.log("loged sucessfully"+JSON.stringify(userCredential.user))
          updateProfile(auth.currentUser!,{
            displayName : name
          }).catch((error)=>{
            console.log("update profile "+error)
          }).then(()=>{
          navigation.navigate("TabNavigation")
          })
        }).catch((error)=>{
          console.log(" create account "+error);
          alert(error.message)
      })
        } else{
        alert("password and confirm password should be same")

        }
      } else{
        alert("fill the fields")
      }
    }


  return (
    <View style={styles.container}>
      <View style={{paddingTop : 40}}>
    <EditTextComponent isPassword={false} onChangeText={(val)=>{setName(val)}} placeHolder='Name' value={name}  label='Name'/>
    <EditTextComponent isPassword={false} onChangeText={(val)=>{setEmail(val)}} placeHolder='Email' value={email}  label='Email'/>
    <EditTextComponent isPassword={false} onChangeText={(val)=>{setPassword(val)}} placeHolder='Password' value={password}  label='Password'/>
    <EditTextComponent isPassword={false} onChangeText={(val)=>{seConfirmPassword(val)}} placeHolder='Confirm Password' value={confirmPassword}  label='Confirm Password'/>
    </View>
    <View>
      <ButtonComponent title='submit' onPress={createAccount}/>
      </View>
</View>
  )
}

export default SingUp

const styles = StyleSheet.create({
  container :{
    flex : 1,
    padding : 10,
    backgroundColor : '#67B7D1',
    borderRadius : 20,
    justifyContent: 'space-between'
}
})