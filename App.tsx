import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Welcome } from './src/Components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome title="React native bare workd type" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
