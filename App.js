import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import bootstrap from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store';
import { DB } from './src/db';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
   'Non-serializable values were found in the navigation state',
   `The action 'SET_PARAMS' with payload {"params":{}} was not handled by any navigator.`,
]);

async function loadApplication() {
   try {
      await Font.loadAsync({
         'open-regular': require('./assets/Fonts/OpenSans-Regular.ttf'),
         'open-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
      });
      console.log('Font loading...');
      await DB.init();
      console.log('DataBase start...');
   } catch (e) {
      console.log('Error: ', e);
   }
}

export default function App() {
   const [isReady, setIsReady] = useState(false);

   if (!isReady) {
      return (
         <AppLoading
            startAsync={loadApplication}
            onError={(err) => console.log(err)}
            onFinish={() => setIsReady(true)}
         />
      );
   }

   return (
      <Provider store={store}>
         <AppNavigation />
      </Provider>
   );
}
