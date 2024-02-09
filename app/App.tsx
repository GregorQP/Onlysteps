import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StartPage } from '../components/StartPage';
import React from 'react';

export const App = () => {
    return (
        <View style={styles.container}>
            <StartPage/>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
