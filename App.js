import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import bootstrap from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';
import * as Font from 'expo-font';

async function loadApplication() {
   await Font.loadAsync({
      'open-regular': require('./assets/Fonts/OpenSans-Regular.ttf'),
      'open-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
   });
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

   return <AppNavigation />;
}
