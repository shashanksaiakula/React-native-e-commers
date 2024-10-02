import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import image from '../assets/splashscreen.png'
import { auth } from '../fireBase/firebaseConfig'
import { Icon } from 'react-native-elements';
import ButtonComponent from '../components/ButtonComponent';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '../navigation/StackNavigation.tsx/NavigationType';
import Login from './Login';
import SingUp from './SingUp';

const Profile = () => {
var userData = auth.currentUser
const navigation = useNavigation<StackNavigationProps>();

const logout = ()=>{

  signOut(auth).then(()=>{
    navigation.navigate("Login")
  }).catch((error)=>{
    console.log("sign out "+error)
  })
}

  return (
    // <>
    // {(auth.currentUser == null) ? (<>
    //   <View>
      
    //   </View>
    //   </> ):(<>
        <ScrollView contentContainerStyle={{ flex:1,justifyContent: 'space-between',backgroundColor : '#ecfef2'}}>
        <View style={styles.constainer}>
          {(auth.currentUser == null) ?
          (<View style={{flex:1,justifyContent : 'center'}}>
          <View style={styles.section}>
        <Text style={styles.text}>
          Cart
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </View>
        <View style={styles.section}>
        <Text style={styles.text}>
         Sign in
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </View>
        <View style={styles.section}>
        <Text style={styles.text}>
         Sign Up
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </View>
          </View>) :(<>
        <View style={styles.image}>
          <Image source={image} style={{width: 150, height: 150, borderRadius: 75}} resizeMode='stretch' />
        </View>
        <View style={styles.section}>
        <Text style={styles.text}>
          {userData?.displayName}
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </View>
        <View style={styles.section}>
        <Text style={styles.text}>
          Change Password
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </View>
        <View style={styles.section}>
        <Text style={styles.text}>
        Address
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </View>
        <View style={styles.section}>
        <Text style={styles.text}>
        cart
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </View>
        <View style={styles.section}>
        <Text style={styles.text}>
        orders
        </Text>
        <Icon name="chevron-forward" type="ionicon" color="#808080"/>
        </View>
        </>)}
        </View>
        {auth.currentUser !=null && <View style={styles.button}>
            <ButtonComponent title='Logout' onPress={logout}/>
            </View>}
      </ScrollView>
//       </>)
// }
//       </>
      
  )
}

export default Profile

const styles = StyleSheet.create({
  constainer:{
    flex :1,
    padding : 20,
    paddingTop : 80,
  },
  image:{
    alignItems : 'center',
    borderRadius: 75,
    justifyContent : "center",
    borderWidth: 2,
    padding : 2,
    // backgroundColor : 'red',
    // borderColor : 'green',
    alignSelf : 'center',
  },
  section :{
    flexDirection : 'row',
    padding : 10,
    borderRadius : 15,
    borderWidth : 2,
    justifyContent : 'space-between',
    margin : 10,
  },text:{
    fontSize : 22,
    fontWeight : 'bold',
    fontStyle: 'italic',
  },button:{
    // backgroundColor : 'red',
  }
})