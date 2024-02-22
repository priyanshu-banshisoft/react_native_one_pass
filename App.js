import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './app/screens/Login';
import Dashboard from './app/screens/Dashboard';
import BottomNavigation from './app/routing/BottomNavigation';

export default function App() {
  const Stack = createNativeStackNavigator();
  const isLogin = false;
  return (
    <NavigationContainer>
      {isLogin ? 
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Dashboard'>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    : <BottomNavigation/>}
    </NavigationContainer>
  );
}
