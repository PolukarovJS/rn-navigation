import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = ({}) => {
   return (
      <View style={styles.center}>
         <Text style={styles.text}>Это лучшее приложение для личных заметок!</Text>
         <Text style={styles.text}>
            Версия приложения <Text style={{ fontFamily: 'open-bold' }}>1.0.0</Text>
         </Text>
      </View>
   );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
   headerShown: true,
   headerTitleAlign: 'center',
   headerTitle: 'Описание',

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
      justifyContent: 'center',
      alignItems: 'center',
   },
   text: {
      fontSize: 20,
      textAlign: 'center',
   },
});
