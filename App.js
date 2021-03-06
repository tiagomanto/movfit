import 'react-native-gesture-handler';
import React from 'react'
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import loginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen'
import HomeScreen from './Screens/HomeScreen'
import AddChatScreen from './Screens/AddChatScreen'
import ChatScreen from './Screens/ChatScreen'
const Stack = createStackNavigator();

const globalScreenOptions={
  headerStyle:{backgroundColor:"#2C6bed"},
  headerTitleStyle: {color:"white"},
  headerTintColor: "white",
};

export default function App() { 
  return (

        <NavigationContainer>
          <Stack.Navigator screenOptions={globalScreenOptions}>
            <Stack.Screen name="Login" component={loginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddChat" component={AddChatScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
          </Stack.Navigator> 
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:'center'
  },
})
