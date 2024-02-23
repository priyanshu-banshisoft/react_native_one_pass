import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './app/screens/Login';
import Dashboard from './app/screens/Dashboard';
import BottomNavigation from './app/routing/BottomNavigation';
import OtpScreen from './app/screens/OtpScreen';
import EditProfile from './app/screens/EditProfile';

export default function App() {
  const Stack = createNativeStackNavigator();
  const isLogin = true;
  return (
    <NavigationContainer>
      {isLogin ? 
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='EditProfile'>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    : <BottomNavigation/>}
    </NavigationContainer>
  );
}
