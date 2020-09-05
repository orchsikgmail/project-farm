import * as React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import { View, Platform, Button, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'expo-asset';

import { Center } from './src/components/Wrapper';
import StackNavigatoin from './src/samples/navigations/StackNavigatoin';

const Center1 = Center({ flex: 1 });

const App = () => {
  return <StackNavigatoin />;
};

export default App;

/* <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader />}>
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" hidden />
            <MainNavigation />
          </View>
        </PersistGate>
      </Provider> */
