import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { THEME } from '../theme';
import { Platform } from 'react-native';

const PostStack = createStackNavigator();
const BookedStack = createStackNavigator();
const Tab =
   Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
   gestureEnabled: false,
   headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
   },
   headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
};

const MyScreensPostNavigator = () => {
   return (
      <PostStack.Navigator
         initialRouteName="Main"
         navigationOptions
         component={MainScreen}
         screenOptions={screenOptions}
      >
         <PostStack.Screen
            name="Main"
            component={MainScreen}
            options={MainScreen.navigationOptions}
         />
         <PostStack.Screen
            name="Post"
            component={PostScreen}
            options={PostScreen.navigationOptions}
         />
      </PostStack.Navigator>
   );
};

const MyScreenBookedNavigator = () => {
   return (
      <BookedStack.Navigator
         initialRouteName="Booked"
         navigationOptions
         component={BookedScreen}
         screenOptions={screenOptions}
      >
         <BookedStack.Screen
            name="Booked"
            component={BookedScreen}
            options={BookedScreen.navigationOptions}
         />
         <BookedStack.Screen
            name="Post"
            component={PostScreen}
            options={PostScreen.navigationOptions}
         />
      </BookedStack.Navigator>
   );
};

const AboutNavigator = () => {
   return (
      <BookedStack.Navigator
         initialRouteName="About"
         navigationOptions
         component={AboutScreen}
         screenOptions={screenOptions}
      >
         <BookedStack.Screen
            name="About"
            component={AboutScreen}
            options={AboutScreen.navigationOptions}
         />
      </BookedStack.Navigator>
   );
};

const CreateNavigator = () => {
   return (
      <BookedStack.Navigator
         initialRouteName="Create"
         navigationOptions
         component={CreateScreen}
         screenOptions={screenOptions}
      >
         <BookedStack.Screen
            name="Create"
            component={CreateScreen}
            options={CreateScreen.navigationOptions}
         />
      </BookedStack.Navigator>
   );
};

const MyTabsBottomNavigator = () => {
   return (
      <Tab.Navigator barStyle={{ backgroundColor: THEME.MAIN_COLOR }}>
         <Tab.Screen
            name="Post"
            component={MyScreensPostNavigator}
            options={{
               tabBarLabel: 'Все',
               tabBarIcon: (info) => {
                  return <Ionicons name="ios-albums" size={25} color={info.color} />;
               },
            }}
         />
         <Tab.Screen
            name="Booked"
            component={MyScreenBookedNavigator}
            options={{
               tabBarLabel: 'Избранное',
               tabBarIcon: (info) => {
                  return <Ionicons name="ios-star" size={25} color={info.color} />;
               },
            }}
         />
      </Tab.Navigator>
   );
};

const MainNavigator = () => {
   return (
      <Drawer.Navigator
         overlayColor={THEME.MAIN_COLOR}
         screenOptions={{ activeTintColor: THEME.MAIN_COLOR }}
         drawerContentOptions={{
            activeTintColor: THEME.MAIN_COLOR,
            itemStyle: { marginVertical: 5 },
            labelStyle: {
               fontFamily: 'open-bold',
            },
         }}
      >
         <Drawer.Screen
            name="PostTabs"
            component={MyTabsBottomNavigator}
            options={{
               drawerLabel: 'Главная',
               drawerIcon: (info) => {
                  return <Ionicons name="ios-star" />;
               },
            }}
         />
         <Drawer.Screen
            name="About"
            component={AboutNavigator}
            options={{
               drawerLabel: 'О приложении',
               drawerIcon: (info) => {
                  return <Ionicons name="bookmark" />;
               },
            }}
         />
         <Drawer.Screen
            name="Create"
            component={CreateNavigator}
            options={{
               drawerLabel: 'Новый пост',
               drawerIcon: (info) => {
                  return <Ionicons name="add-circle" />;
               },
            }}
         />
      </Drawer.Navigator>
   );
};

export const AppNavigation = () => {
   return (
      <NavigationContainer>
         <MainNavigator />
      </NavigationContainer>
   );
};
