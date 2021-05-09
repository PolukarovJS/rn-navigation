import * as Font from 'expo-font';

export async function bootstrap() {
   await Font.loadAsync({
      'open-regular': require('../assets/Fonts/OpenSans-Regular.ttf'),
      'open-bold': require('../assets/Fonts/OpenSans-Bold.ttf'),
   });
}
