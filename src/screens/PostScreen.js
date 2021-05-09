import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import { DATA } from '../data';
import { THEME } from '../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const PostScreen = ({ navigation, route }) => {
   const postId = route.params.postId;
   const post = DATA.find((p) => p.id === postId);
   // useEffect(() => {
   //    navigation.setParams({ booked: post.booked, date: post.date });
   // }, []);
   const removeHandler = (id) => {
      Alert.alert(
         'Удаление поста',
         'Вы уверены, что хотите удалить пост?',
         [
            {
               text: 'Отменить',
               onPress: () => console.log('Cancel Pressed'),
               style: 'cancel',
            },
            { text: 'Удалить', style: 'destructive', onPress: () => {} },
         ],
         { cancelable: false }
      );
   };
   return (
      <ScrollView style={styles.center}>
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
   const iconName = route.params.booked ? 'ios-star' : 'ios-star-outline';
   return {
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
               title="Take photo"
               iconName={iconName}
               onPress={() => console.log('Press photo')}
            />
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
