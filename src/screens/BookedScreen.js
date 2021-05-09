import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from '../data';

export const BookedScreen = ({ navigation }) => {
   const openPostHandler = (post) => {
      navigation.navigate('Post', { postId: post.id, booked: post.booked, date: post.date });
   };
   const data = DATA.filter((post) => post.booked);
   return <PostList data={data} onOpen={openPostHandler} />;
};

BookedScreen.navigationOptions = ({ navigation }) => ({
   headerShown: true,
   headerTitleAlign: 'center',
   headerTitle: 'Избранное',
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
