import React from 'react';
import {
  DefaultTheme,
  Headline,
  Provider as PaperProvider,
} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {Theme} from 'react-native-paper/lib/typescript/types';
import FormCreateClient from './src/components/FormCreateProduct/FormCreateProduct';
import {globalStyle} from './src/styles/global';
const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8236CB',
  },
};
const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <View style={globalStyle.container}>
          <Headline style={globalStyle.title}>Customer Registration</Headline>
          <FormCreateClient />
        </View>
      </PaperProvider>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
