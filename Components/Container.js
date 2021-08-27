import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplasScreen from './SplashScreen';
import Principal from './Principal';
import Consultas from './Consultas';
import Noticias from './Noticias';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplasScreen"
          component={SplasScreen}
          options={{ title: 'Splash' }}
        />
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ title: 'Inicio'}}
        />
        <Stack.Screen
          name="Consultas"
          component={Consultas}
          options={{title: 'Consultas'}}
        />
        <Stack.Screen
          name="Noticias"
          component={Noticias}
          options={{title: 'Noticias'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
