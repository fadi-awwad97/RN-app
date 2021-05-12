import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/MealsNavigation';
import {enableScreens} from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import {Provider} from 'react-redux'

enableScreens();//hay 2al a7sn bs ma ba3rf sho fedet 

const rootReducer = combineReducers ( {
  meals: mealsReducer
})

const store = createStore(rootReducer); 

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}




export default function App() {


  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={() => console.log(err)}

    />)}

  return (
  <Provider store={store}> 
  <MealsNavigator />
  </Provider> 
  )
  ;
}

