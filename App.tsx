import React from "react";
import {View, Text, StyleSheet, SafeAreaView, StatusBar,} from 'react-native'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import LibraryScreen from "./Screens/LibraryScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'

const {Navigator, Screen} = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '343434'
  },
  
};
const App  = () =>{
  return(
    <View style={{flex:1, backgroundColor: '#343434' }}>
    <NavigationContainer
    
      theme={MyTheme}
      
      
      
        >
        <Navigator
          // style={{backgroundColor: '#343434', color:'white' }}
          initialRouteName='Search'
          screenOptions={{
            headerShown: false,
            // tabBarActiveTintColor: ,
            // tabBarInactiveTintColor: theme.colors.text_detail,
            tabBarLabelStyle:{
              color:'white'
            },
            tabBarStyle: {
              // paddingVertical: Platform.OS === 'ios' ? 20 : 0,
              height: 100,
              backgroundColor: '#343434'
            }
          }}
          >
        <Screen
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: () => (
              
              <MaterialCommunityIcons name="home" color={'white'} size={26} />
            ),
          }}
          />
        <Screen 
          name="Search" 
          component={SearchScreen} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: () => (
              <FontAwesome name="search" color={'white'} size={26} />
            ),
          }}
        />
        <Screen 
          name="Library" 
          component={LibraryScreen}
          options={{
            tabBarIcon: () => (
              <Ionicon name='ios-library' size={26} color={'white'} />
            )
          }} />
      </Navigator>
      </NavigationContainer>
      </View>
  )
}

const styles:object = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App