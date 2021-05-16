import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { loadPosts } from '../store/actions/postAction';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { THEME } from '../theme';

export const MainScreen = ({ navigation }) => {
   const openPostHandler = (post) => {
      navigation.navigate('Post', { postId: post.id, booked: post.booked, date: post.date });
   };

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(loadPosts());
   }, [dispatch]);

   const allPost = useSelector((state) => state.post.allPosts);
   const loading = useSelector((state) => state.post.loading);

   if (loading) {
      return (
         <View style={styles.center}>
            <ActivityIndicator color={THEME.MAIN_COLOR} />
         </View>
      );
   }

   return <PostList data={allPost} onOpen={openPostHandler} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
   headerShown: true,
   headerTitleAlign: 'center',
   headerTitle: 'Мой блог!',
   headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
         <Item
            title="Take photo"
            iconName="ios-camera"
            onPress={() => navigation.navigate('Create', { text: '', img: '' })}
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

const styles = StyleSheet.create({
   center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
});
