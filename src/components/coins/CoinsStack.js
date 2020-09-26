import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const stack = createStackNavigator();

const CoinStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" />
    </Stack.Navigator>
  );
};

export default CoinStack