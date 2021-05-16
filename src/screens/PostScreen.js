import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { toggleBooked, removePost } from '../store/actions/postAction';

export const PostScreen = ({ navigation, route }) => {
   const dispatch = useDispatch();
   const postId = route.params.postId;

   const post = useSelector((state) => state.post.allPosts.find((post) => post.id === postId));

   const booked = useSelector((state) => state.post.bookedPosts.some((post) => post.id === postId));

   useEffect(() => {
      navigation.setParams({ booked: booked });
   }, [booked]);

   const toggleHandler = useCallback(() => {
      dispatch(toggleBooked(post));
   }, [dispatch, post]);

   useEffect(() => {
      navigation.setParams({ toggleHandler });
   }, [toggleHandler]);

   const removeHandler = () => {
      Alert.alert(
         'Удаление поста',
         'Вы уверены, что хотите удалить пост?',
         [
            {
               text: 'Отменить',
               style: 'cancel',
            },
            {
               text: 'Удалить',
               style: 'destructive',
               onPress: () => {
                  dispatch(removePost(postId));
                  navigation.navigate('Main');
               },
            },
         ],
         { cancelable: false }
      );
   };

   if (!post) {
      return <Text>Пост удален</Text>;
   }

   return (
      <ScrollView>
         <Image source={{ uri: post.img }} style={styles.image} />
         <View style={styles.textWrap}>
            <Text style={styles.title}>{post.text}</Text>
         </View>
         <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeHandler} />
      </ScrollView>
   );
};

PostScreen.navigationOptions = ({ route }) => {
   const date = route.params.date;
   const booked = route.params.booked;
   const toggleHandler = route.params.toggleHandler;
   const iconName = booked ? 'ios-star' : 'ios-star-outline';
   return {
      headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />
         </HeaderButtons>
      ),
   };
};

const styles = StyleSheet.create({
   textWrap: {
      padding: 10,
   },
   image: {
      width: '100%',
      height: 200,
   },
   title: {
      fontFamily: 'open-regular',
   },
});
