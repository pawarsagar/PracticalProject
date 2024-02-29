// App.js
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import {
  CheckNativeCallbackScreen,
  HomeScreen,
  UserInputScreen,
} from './src/Modules';
import store from './src/Store/store';

const Stack = createStackNavigator();

const App = (props: {isVirtualDevice: Boolean}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserInputScreen"
            component={UserInputScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CheckNativeCallbackScreen"
            component={CheckNativeCallbackScreen}
            options={{headerShown: false}}
            initialParams={{...props}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
