import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LoginApi, loginAPIS } from '../networkCall/ApiCalls'
import EditTextComponent from '../components/EditTextComponent'
import icon from '../assets/splashscreen.png'
import ButtonComponent from '../components/ButtonComponent'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '../navigation/StackNavigation.tsx/NavigationType'
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../fireBase/firebaseConfig'

const Login = () => {

  const [email,setEmail] = useState("")
  const [paswword , setPassword] = useState("")

  const navigation = useNavigation<StackNavigationProps>();

  const isFocused = useIsFocused();


  useEffect(() => {
    if (isFocused) {
      console.log("Focused: ", isFocused);
      console.log("Checking user login: ", JSON.stringify(auth.currentUser));

      if (auth.currentUser !== null && auth.currentUser.uid !== null) {
        navigation.navigate("TabNavigation"); // Navigate if the user is logged in
      }
    }
  }, [isFocused, auth.currentUser]); 

  const loginRequest = (email : string, password : string)=>{
    // try{
      LoginApi(email,password).then((res)=>{
        console.log(res+ "resfdsfdf")
        if(res && res.uid) {
          console.log("Response data fields: ");
          navigation.navigate("TabNavigation")
        }
      })
    // console.log(" response data is  "+response)
 
    // } catch(error){
    //   console.error('Error during login:', error);
    // }
  // }
}

  const navigateToSignUP = ()=>{
    navigation.navigate("SignUp")
  }
  const navigateForgotPassword = ()=>{
    navigation.navigate("ForgotPassword")
  }
  const navigateChangePassword = ()=>{
    navigation.navigate("ChangePassword") 
  }
  const navigateBySkip = ()=>{
    navigation.navigate("TabNavigation")
  }

  const changeEmail = (value : string)=>{
    setEmail(value)
  }
  const changePass = (value : string) =>{
    setPassword(value)
  }

  const login = async()=>{
    if(email !== "" && paswword !== "") {
//       signInWithEmailAndPassword(auth,email,paswword)
// .then((userCredential)=>{
//     const user = userCredential.user;
//     console.log("user "+ user.uid)
//     // return {
//     //     uid: user.uid,
//     //     email: user.email,
//     //     displayName: user.displayName,
//     //     photoURL: user.photoURL,
//     //     emailVerified: user.emailVerified,
//     //     // Any other user properties you need
//     //   };
//       if(user && user.uid){
//         navigation.navigate("Home")
//       }
// })
  loginAPIS(email,paswword).then((res) =>{
    navigation.navigate("TabNavigation")
    console.log("date is "+ JSON.stringify(res.user))
  }).catch((error)=>{
    console.log("error "+ JSON.stringify(error.message))
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Login failed: ${errorCode} - ${errorMessage}`);
        throw error;
})
    } else{
      alert("Please fill Email and Password")
    }


  }
  
//   updateProfile(auth.currentUser!,{
//     displayName : 'Shashank sai'}).then(()=>{
// console.log("update profile")
//     }).catch((error)=>{
//       console.log("error "+ error)
//     });

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <View style={styles.bottomView}>
    <EditTextComponent isPassword={false} onChangeText={changeEmail} placeHolder='Email' value={email} label='Email'/>
    <EditTextComponent isPassword={false} onChangeText={changePass} placeHolder='Password' value={paswword} label='Password'/>
      <View style={{flexDirection : 'row', justifyContent : 'space-evenly'}}>
      <TouchableOpacity onPress={navigateForgotPassword}>
        <Text style={styles.belowText}>Forgot password</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={navigateChangePassword}>
        <Text style={styles.belowText}>change password</Text>
      </TouchableOpacity> */}
      </View>
      <ButtonComponent title='Login' onPress={login}/>
        <ButtonComponent title='Register' onPress={navigateToSignUP}/>
        <TouchableOpacity onPress={navigateBySkip}>
        <Text style={styles.belowText}>SKIP</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex : 1,
    marginTop : 40,
    padding: 10,
    justifyContent : 'space-around',

  },
  image :{
    width : 400,
    height : 300,
    marginBottom : 30,
    borderRadius : 20,
    
    alignSelf : 'center',
    
  },bottomView:{
    flex : 1,
    padding: 30,
    backgroundColor: '#67B7D1',
    justifyContent : 'flex-start',
    borderTopLeftRadius : 20,
    borderTopRightRadius :20,
  },belowText:{
    fontSize : 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    alignSelf : 'center'
  }
})