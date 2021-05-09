import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from '../data';

export const MainScreen = ({ navigation }) => {
   const openPostHandler = (post) => {
      navigation.navigate('Post', { postId: post.id, booked: post.booked, date: post.date });
   };
   return <PostList data={DATA} onOpen={openPostHandler} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
   headerShown: true,
   headerTitleAlign: 'center',
   headerTitle: 'Мой блог',
   headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
         <Item
            title="Take photo"
            iconName="ios-camera"
            onPress={() => navigation.navigate('Create')}
         />
      </HeaderButtons>
   ),
   headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
         <Item
            title="Toggle drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
         />
      </HeaderButtons>
   ),
});
