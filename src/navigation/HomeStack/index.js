import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Screen1, Screen2, Screen3 } from 'screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
};

export default HomeStack;
