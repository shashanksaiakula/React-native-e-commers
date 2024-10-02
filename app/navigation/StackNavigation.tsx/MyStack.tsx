import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Profile from '../../screens/Profile';
import SingUp from '../../screens/SingUp';
import ForgotPassword from '../../screens/ForgotPassword';
import ChangePassword from '../../screens/ChangePassword';
import TabNavigation from '../BottomNavigation.tsx/TabNavigation';
import HomeStack from './HomeStack';



// pass params here 
// type value ={
//   isActive: boolean
// }
// 

export type StackParamList= {
  // Home : value
  TabNavigation : undefined
  Login : undefined
  Profile : undefined
  SignUp : undefined
  ForgotPassword : undefined
  ChangePassword : undefined,
  HomeStack : undefined
};

const MyStack = () => {
  const stack = createNativeStackNavigator<StackParamList>()
  return (
      <stack.Navigator initialRouteName='Login'>
        <stack.Screen name='TabNavigation' component={TabNavigation}  options={{headerShown :false}}/>
        <stack.Screen name='Login' component={Login} options={{headerShown :false}}/>
        <stack.Screen name='SignUp' component={SingUp}/>
        <stack.Screen name='ForgotPassword' component={ForgotPassword} />
        {/* <stack.Screen name='HomeStack' component={HomeStack}options={{headerShown :false}} /> */}
        {/* <stack.Screen name='Profile' component={Profile}/> */}
        {/* <stack.Screen name='ChangePassword' component={ChangePassword} /> */}
      </stack.Navigator>
  );
};

export default MyStack;
