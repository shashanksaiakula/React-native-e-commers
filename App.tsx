import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './app/navigation/StackNavigation.tsx/MyStack';

export default function App() {
  return (
      <NavigationContainer >
    <View style={styles.container}>
        <MyStack/>
      </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
