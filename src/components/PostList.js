import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Post } from '../components/Post';

export const PostList = ({ data, onOpen }) => {
   if (!data.length) {
      return (
         <View style={styles.wrapper}>
            <Text style={styles.noPosts}>Постов пока нет!</Text>
         </View>
      );
   }
   return (
      <View style={styles.wrapper}>
         <FlatList
            data={data}
            keyExtractor={(post) => post.id.toString()}
            renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   wrapper: {
      padding: 10,
   },
   noPosts: {
      fontFamily: 'open-regular',
      textAlign: 'center',
      marginVertical: 10,
      fontSize: 25,
   },
});
