import * as Font from 'expo-font';
import { DB } from './db';

export async function bootstrap() {
   try {
      await Font.loadAsync({
         'open-regular': require('../assets/Fonts/OpenSans-Regular.ttf'),
         'open-bold': require('../assets/Fonts/OpenSans-Bold.ttf'),
      });
      await DB.init();
      console.log('DataBase start...');
   } catch (e) {
      console.log('Error: ', e);
   }
}
