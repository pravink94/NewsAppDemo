import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { setNavigator } from './src/navigationRef';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import NewsListScreen from './src/screens/NewsListScreen';
import NewsDetailsScreen from './src/screens/NewsDetailsScreen';

import { APPProvider } from "./src/contexts/AppProvider";

import { Provider as AuthProvider } from './src/contexts/AuthContext';
// import { Provider as LocationProvider } from './src/context/LocationContext';
// import { Provider as TrackContext } from './src/context/TrackContext';


const switchNavigator = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  newsFlow: createStackNavigator({
    NewsListScreen: NewsListScreen,
    NewsDetailsScreen: NewsDetailsScreen
  })
});

// export default createAppContainer(switchNavigator);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    // <App ref={(navigator) => { setNavigator(navigator) }} />
    <APPProvider><AuthProvider><App ref={(navigator) => { setNavigator(navigator) }} /></AuthProvider></APPProvider>

  );
};

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
