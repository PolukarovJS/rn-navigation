import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Button, Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const PhotoPicker = ({ onPick, isImgRef }) => {
   const [image, setImage] = useState(null);

   useEffect(() => {
      (async () => {
         if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
               Alert.alert('Ошибка', 'Вы не дали прав на создание фото!');
            }
         }
      })();
   }, []);

   const takePhoto = async () => {
      const img = await ImagePicker.launchCameraAsync({
         quality: 0.7,
         allowsEditing: false,
         aspect: [16, 9],
      });
      setImage(img.uri);
      onPick(img.uri);
   };

   return (
      <View style={styles.wrapper}>
         <Button title="Сделать фото" onPress={takePhoto} />
         {image && isImgRef && <Image style={styles.image} source={{ uri: image }} />}
      </View>
   );
};

const styles = StyleSheet.create({
   wrapper: {
      marginBottom: 10,
   },
   image: {
      width: '100%',
      height: 200,
      marginTop: 10,
   },
});
