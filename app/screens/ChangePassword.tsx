import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import EditTextComponent from '../components/EditTextComponent'
import ButtonComponent from '../components/ButtonComponent'
import { updatePassword } from 'firebase/auth'
import { auth } from '../fireBase/firebaseConfig'

const ChangePassword = () => {

  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] =useState("")
  const user = auth.currentUser;
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider:1 " + profile.providerId);
      console.log("  Provider-specific UID:1 " + profile.uid);
      console.log("  Name:1 " + profile.displayName);
      console.log("  Email:1 " + profile.email);
      console.log("  Photo URL:1 " + profile.photoURL); 
    });
  }
  const changePassword =()=>{
    updatePassword(user!, password).then(()=>{
      console.log("upated password")
    }).catch((error)=>{
      console.log("error "+ error)
    })
  }

  return (
    <View style={styles.container}>
        <View style={{paddingTop : 40}}>
          <EditTextComponent isPassword={false} onChangeText={(value)=>setOldPassword(value)} placeHolder='Old Password' value={oldPassword}  label='Old Password'/>
          <EditTextComponent isPassword={false} onChangeText={(value)=>setPassword(value)} placeHolder='New Password' value={password}  label='New Password'/>
          </View>
          <View>
            <ButtonComponent title='submit' onPress={changePassword}/>
            </View>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
    container :{
        flex : 1,
        padding : 10,
        backgroundColor : '#67B7D1',
        borderRadius : 20,
         justifyContent: 'space-between'
    }
})