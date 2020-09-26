import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from "./CoinsScreen";

const stack = createStackNavigator();

const CoinStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinsScreen} />
    </Stack.Navigator>
  );
};

export default CoinStack